import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipHeader from "./InternshipHeader";
import InternshipProfileCard from "./InternshipProfileCard";
import "../styles/InternshipApp.css";

const InternshipApp = () => {
  const [applications, setApplications] = useState([]);
  const [groupedApplications, setGroupedApplications] = useState({});
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

      setApplications(data);

      // Group applications by job title
      const grouped = {};
      data.forEach((app) => {
        const title = app.job?.title || "Other";
        if (!grouped[title]) grouped[title] = [];
        grouped[title].push({
          _id: app._id, // application id
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

  useEffect(() => {
    fetchApplications();
  }, []);


  
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
        studentId: candidate.studentId,  // use student ObjectId
        jobId: candidate.jobId,          // use job ObjectId
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
    <div className="internship-app">
      <InternshipHeader />

      {Object.keys(groupedApplications).map((jobTitle) => (
        <div key={jobTitle}>
          <div className="text-card">
            <h2>🏢 {jobTitle}</h2>
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
      ))}
    </div>
  );
};

export default InternshipApp;
