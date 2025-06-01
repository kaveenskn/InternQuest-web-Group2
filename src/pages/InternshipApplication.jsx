import React from "react";
import InternshipHeader from "../components/InternshipHeader";
import ProfileCard from "../components/ProfileCard";
import "../styles/InternshipApplication.css";

const InternshipApplication = () => {
  const applications = [
    {
      name: "Sarah Johnson",
      major: "Computer Science",
      university: "Stanford University",
      gpa: 3.8,
      date: "May 15, 2024",
      status: "Pending",
    },
    {
      name: "Michael Chen",
      major: "Software Engineering",
      university: "MIT",
      gpa: 3.9,
      date: "May 14, 2024",
      status: "Pending",
    },
    {
      name: "Emma Williams",
      major: "Data Science",
      university: "UC Berkeley",
      gpa: 3.7,
      date: "May 13, 2024",
      status: "Reviewed",
    },
  ];

  return (
    <div className="internship-app">
      <InternshipHeader />
      <div className="job-section">
        <div className="job-title-box">
          <h2>Software Engineering Intern</h2>
          <p>Engineering • San Francisco, CA</p>
          <span className="application-count">4 Applications</span>
        </div>
        <div className="profiles">
          {applications.map((app, index) => (
            <ProfileCard key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipApplication;
