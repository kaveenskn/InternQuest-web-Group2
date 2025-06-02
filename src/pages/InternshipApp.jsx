import React from "react";
import InternshipHeader from "../component/InternshipHeader";
import InternshipProfileCard from "../component/InternshipProfileCard";
import "../styles/InternshipApp.css";

const InternshipApp = () => {
  const softwareEngineeringCandidates = [
    {
      name: "Liam Johnson",
      role: "Software Engineer Intern",
      status: "Accepted",
      university: "Stanford University",
      gpa: "4.0",
      applied: "2023-09-25",
    },
    {
      name: "Carlos Ruiz",
      role: "Fullstack Intern",
      status: "Accepted",
      university: "Madrid University",
      gpa: "3.6",
      applied: "2023-10-10",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer Intern",
      status: "Accepted",
      university: "XYZ University",
      gpa: "3.9",
      applied: "2023-09-15",
    },

    {
      name: "John Doe",
      role: "Frontend Developer Intern",
      status: "Pending",
      university: "ABC University",
      gpa: "3.8",
      applied: "2023-10-01",
    },

    {
      name: "Emily Davis",
      role: "DevOps Intern",
      status: "Rejected",
      university: "Harvard University",
      gpa: "3.4",
      applied: "2023-09-30",
    },
    {
      name: "Ali Khan",
      role: "UI/UX Designer Intern",
      status: "Rejected",
      university: "LMN University",
      gpa: "3.5",
      applied: "2023-08-20",
    },
  ];

  const dataScienceCandidates = [
    {
      name: "Sakura Tanaka",
      role: "Data Science Intern",
      status: "Pending",
      university: "Tokyo University",
      gpa: "3.7",
      applied: "2023-10-05",
    },
    {
      name: "Nina Patel",
      role: "Data Science Intern",
      status: "Pending",
      university: "MIT",
      gpa: "3.8",
      applied: "2023-10-12",
    },
  ];

  return (
    <div className="internship-app">
      <InternshipHeader />

      <div className="text-card">
        <h2>🏢 Software Engineering Intern</h2>
      </div>
      <div className="profile-list">
        {softwareEngineeringCandidates.map((candidate, index) => (
          <InternshipProfileCard
            key={index}
            name={candidate.name}
            role={candidate.role}
            status={candidate.status}
            university={candidate.university}
            gpa={candidate.gpa}
            applied={candidate.applied}
          />
        ))}
      </div>

      <div className="text-card">
        <h2>🏢 Data Science Intern</h2>
      </div>
      <div className="profile-list">
        {dataScienceCandidates.map((candidate, index) => (
          <InternshipProfileCard
            key={index}
            name={candidate.name}
            role={candidate.role}
            status={candidate.status}
            university={candidate.university}
            gpa={candidate.gpa}
            applied={candidate.applied}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipApp;
