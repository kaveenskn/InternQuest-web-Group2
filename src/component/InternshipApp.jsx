import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipHeader from "./InternshipHeader";
import InternshipProfileCard from "./InternshipProfileCard";
import "../styles/InternshipApp.css";

const InternshipApp = () => {
  const [applications, setApplications] = useState([]);
  const [groupedApplications, setGroupedApplications] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
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

        console.log("fetched applications:", data);

        // Group applications by job title
        const grouped = {};
        data.forEach((app) => {
          const title = app.job?.title || "Other";
          if (!grouped[title]) grouped[title] = [];
          grouped[title].push({
            name: app.student?.fullname || "N/A",
            role: app.job?.title || "Unknown Role",
            university: app.student?.universityName || "Unknown University",
            email: app.student?.user?.email || "Unknown Email",
            applied: new Date(app.appliedAt).toISOString().split("T")[0],
          });
        });

        setApplications(data);
        setGroupedApplications(grouped);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleViewProfile = (email) => {
    navigate(`/student-profile/${encodeURIComponent(email)}`);
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
                onViewProfile={() => handleViewProfile(candidate.email)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InternshipApp;
