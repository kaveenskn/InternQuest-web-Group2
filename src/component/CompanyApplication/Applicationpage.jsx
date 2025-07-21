import React, { useEffect, useState } from "react";
import InternshipProfileCard from "../InternshipProfileCard";
import ShortlistedProfileCard from "../ShortListedprofilecard";
import { FaUserTie, FaBolt, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/Applicationpage.css";

const ApplicationPage = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [groupedApplications, setGroupedApplications] = useState({});
  const [shortlistedApplications, setShortlistedApplications] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/applications/employee-applications",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        alert("Error: " + (data.message || "Failed to fetch applications"));
        return;
      }

      const grouped = {};
      data.forEach((app) => {
        const title = app.job?.title || "Other";
        if (!grouped[title]) grouped[title] = [];
        grouped[title].push({
          _id: app._id,
          studentId: app.student?._id,
          jobId: app.job?._id,
          name: app.student?.fullname || "N/A",
          role: app.job?.title || "Unknown Role",
          university: app.student?.universityName || "Unknown University",
          email: app.student?.user?.email || "Unknown Email",
          applied: new Date(app.appliedAt).toISOString().split("T")[0],
        });
      });

      setGroupedApplications(grouped);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    }
  };

  const fetchShortlistedApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/shortlist/recent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });
      const data = await response.json();

      if (!response.ok) {
        alert("Error fetching shortlisted: " + (data.message || "Unknown error"));
        return;
      }

      setShortlistedApplications(data);
    } catch (error) {
      console.error("Failed to fetch shortlisted applications:", error);
    }
  };

  const fetchStudentProfile = async (email) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/students/profile/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        alert("Error fetching student profile: " + data.message);
        return;
      }
      setSelectedProfile(data);
    } catch (error) {
      console.error("Error fetching student profile:", error);
    }
  };

  const handleViewProfile = (email) => {
    if (email) fetchStudentProfile(email);
  };

  useEffect(() => {
    fetchApplications();
    fetchShortlistedApplications();
  }, []);

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const handleShortList = async (candidate) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/card/shortlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          studentId: candidate.studentId,
          jobId: candidate.jobId,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        alert("Error shortlisting: " + (data.message || "Unknown error"));
        return;
      }
      alert("Shortlisted successfully");
      fetchApplications();
      fetchShortlistedApplications();
    } catch (err) {
      console.error(err);
      alert("Shortlisting failed");
    }
  };

  const handleDelete = async (applicationId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/applicationsdelete/${applicationId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        alert("Error deleting application: " + (data.message || "Unknown error"));
        return;
      }

      alert("Application deleted successfully");
      await fetchApplications();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete application");
    }
  };

  return (
    <div className="application-container">
      <div className="application-top-banner">
        <h1>Internship Applications</h1>
        <p>Track and manage applications with ease on InternQuest</p>

        <div className="application-top-banner-features">
          <div className="application-feature-card">
            <FaUserTie className="application-icon" />
            <h3>200+</h3>
            <p>Total Applicants</p>
          </div>
          <div className="application-feature-card">
            <FaBolt className="application-icon" />
            <h3>Fast Review</h3>
            <p>Smart Filtering & Sorting</p>
          </div>
          <div className="application-feature-card">
            <FaLightbulb className="application-icon" />
            <h3>AI Insights</h3>
            <p>Powered by AI for better decisions</p>
          </div>
        </div>
      </div>

      <div className="application-page">
        <div className="application-sidebar">
          <div className="application-sidebar-header">
            <h2>Applications</h2>
          </div>
          <div className="application-filter-section">
            <div className={`application-filter-item ${currentFilter === "all" ? "active" : ""}`} onClick={() => handleFilterClick("all")}>All Applications</div>
            <div className={`application-filter-item ${currentFilter === "reviewing" ? "active" : ""}`} onClick={() => handleFilterClick("reviewing")}>Reviewing</div>
            <div className={`application-filter-item ${currentFilter === "shortlisted" ? "active" : ""}`} onClick={() => handleFilterClick("shortlisted")}>Short Listed</div>
          </div>
        </div>

        <div className="application-main-content">
          <div className="application-list">
            <div className="application-list-header">
              <h3>
                {currentFilter === "all"
                  ? "All Applications"
                  : currentFilter === "reviewing"
                  ? "Under Review"
                  : "Short Listed Candidates"}
              </h3>
            </div>

            <div className="application-applications-container">
              {currentFilter === "all" ? (
                Object.keys(groupedApplications).length === 0 ? (
                  <p>No applications found.</p>
                ) : (
                  Object.keys(groupedApplications).map((jobTitle) => (
                    <div key={jobTitle}>
                      <div className="application-text-card"><h2>{jobTitle}</h2></div>
                      <div className="application-profile-list">
                        {groupedApplications[jobTitle].map((candidate, index) => (
                          <InternshipProfileCard
                            key={index}
                            name={candidate.name}
                            role={candidate.role}
                            university={candidate.university}
                            email={candidate.email}
                            applied={candidate.applied}
                            onShortList={() => handleShortList(candidate)}
                            onDelete={() => handleDelete(candidate._id)}
                            onViewProfile={() => handleViewProfile(candidate.email)}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                )
              ) : currentFilter === "shortlisted" ? (
                shortlistedApplications.length === 0 ? (
                  <p>No shortlisted candidates found.</p>
                ) : (
                  <div className="application-profile-list">
                    {shortlistedApplications.map((app, idx) => (
                      <ShortlistedProfileCard
                        key={idx}
                        name={app.fullname}
                        role={app.title}
                        university={app.universityName}
                        email={app.email}
                        applied={new Date(app.shortlistedAt).toISOString().split("T")[0]}
                        onViewProfile={() => handleViewProfile(app.email)}
                        onContact={() => alert(`Contact: ${app.email}`)}
                      />
                    ))}
                  </div>
                )
              ) : (
                <p>Filter "{currentFilter}" not yet implemented.</p>
              )}
            </div>
          </div>

          <div className="application-profile-section">
            {selectedProfile ? (
              <div className="application-profile-content">
                <div className="application-profile-header">
                  <div className="application-profile-avatar">
                    {selectedProfile.fullname?.charAt(0)}
                  </div>
                  <div className="application-profile-info">
                    <h3>{selectedProfile.fullname}</h3>
                    <p className="application-profile-position">
                      {selectedProfile.course_of_study}
                    </p>
                  </div>
                </div>
                <div className="application-profile-details">
                  <div className="application-detail-section">
                    <h4>Education</h4>
                    <div className="application-detail-item">
                      <span className="application-detail-label">University:</span> {selectedProfile.universityName}
                    </div>
                    <div className="application-detail-item">
                      <span className="application-detail-label">Location:</span> {selectedProfile.universityLocation}
                    </div>
                  </div>
                  <div className="application-detail-section">
                    <h4>Contact</h4>
                    <div className="application-detail-item">
                      <span className="application-detail-label">Email:</span> {selectedProfile.email}
                    </div>
                    <div className="application-detail-item">
                      <span className="application-detail-label">Phone:</span> {selectedProfile.phone}
                    </div>
                  </div>
                  {selectedProfile.githubLink && (
                    <div className="application-detail-section">
                      <h4>GitHub</h4>
                      <a href={selectedProfile.githubLink} target="_blank" rel="noreferrer">View GitHub Profile</a>
                    </div>
                  )}
                  <div className="application-detail-section">
                    <h4>Skills</h4>
                    <div className="application-skills-grid">
                      {selectedProfile.skills?.map((skill, index) => (
                        <span key={index} className="application-profile-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="application-detail-section">
                    <h4>Projects</h4>
                    {selectedProfile.projects?.map((project, index) => (
                      <div key={index} className="application-project-card">
                        <h5>{project.title}</h5>
                        <p className="application-tech">{project.tech_stack}</p>
                        <p>{project.description}</p>
                        {project.link && <a href={project.link} target="_blank" rel="noreferrer">Live</a>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="application-no-profile-selected">
                <div className="application-placeholder-content">
                  <h3>No Profile Selected</h3>
                  <p>Click "View Profile" on any application to see detailed information here.</p>
                </div>
              </div>
            )}
            <div className="application-profile-actions">
              <button className="application-action-button accept" onClick={()=>{alert(" candidate selected")}}>Accept</button>
              <button className="application-action-button reject">Reject</button>
              <button className="application-action-button schedule">Schedule Interview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
