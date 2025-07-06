import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipHeader from "./InternshipHeader";
import InternshipProfileCard from "./InternshipProfileCard";
import ShortlistedProfileCard from "./ShortListedprofilecard";
import "../styles/InternshipApp.css";

const InternshipApp = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [groupedApplications, setGroupedApplications] = useState({});
  const [shortlistedApplications, setShortlistedApplications] = useState([]);
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/applications/employee-applications", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

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
        alert("Failed to fetch shortlisted students");
        return;
      }

      setShortlistedApplications(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching shortlisted students");
    }
  };

  useEffect(() => {
    if (currentFilter === "all") {
      fetchApplications();
    } else if (currentFilter === "shortlisted") {
      fetchShortlistedApplications();
    }
  }, [currentFilter]);

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
      const response = await fetch(`http://localhost:5000/api/applicationsdelete/${applicationId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

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
    <div className="internship-app">
      <div className="int-head">
        <InternshipHeader />
      </div>

      <div className="filter-bar">
        <div
          className={`filter-button ${currentFilter === "all" ? "active" : ""}`}
          onClick={() => setCurrentFilter("all")}
        >
          All Applications
        </div>
        <div
          className={`filter-button ${currentFilter === "shortlisted" ? "active" : ""}`}
          onClick={() => setCurrentFilter("shortlisted")}
        >
          Short Listed
        </div>
      </div>

      {currentFilter === "all" ? (
        Object.keys(groupedApplications).length === 0 ? (
          <p className="no-data">No applications found.</p>
        ) : (
          Object.keys(groupedApplications).map((jobTitle) => (
            <div key={jobTitle}>
              <div className="text-card">
                <h2 className="job-title">🏢 {jobTitle}</h2>
              </div>
              <div className="profile-list">
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
                  />
                ))}
              </div>
            </div>
          ))
        )
      ) : shortlistedApplications.length === 0 ? (
        <p className="no-data">No shortlisted candidates yet.</p>
      ) : (
        <div className="profile-list">
          {shortlistedApplications.map((app, index) => (
          <ShortlistedProfileCard
  key={index}
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
      )}
    </div>
  );
};

export default InternshipApp;
