import React from "react";
import InternshipHeader from "./InternshipHeader";
import InternshipProfileCard from "./InternshipProfileCard";
import "../styles/InternshipApp.css";

const InternshipApp = () => {
  const softwareEngineeringCandidates = [
    {
      name: "Liam Johnson",
      role: "Software Engineer Intern",
      university: "Stanford University",
      email: "liam.johnson@stanford.edu",
      applied: "2023-09-25",
    },
    {
      name: "Carlos Ruiz",
      role: "Fullstack Intern",
      university: "Madrid University",
      email: "carlos.ruiz@madrid.edu",
      applied: "2023-10-10",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer Intern",
      university: "XYZ University",
      email: "jane.smith@xyz.edu",
      applied: "2023-09-15",
    },
    {
      name: "John Doe",
      role: "Frontend Developer Intern",
      university: "ABC University",
      email: "john.doe@abc.edu",
      applied: "2023-10-01",
    },
    {
      name: "Emily Davis",
      role: "DevOps Intern",
      university: "Harvard University",
      email: "emily.davis@harvard.edu",
      applied: "2023-09-30",
    },
    {
      name: "Ali Khan",
      role: "UI/UX Designer Intern",
      university: "LMN University",
      email: "ali.khan@lmn.edu",
      applied: "2023-08-20",
    },
  ];

  const dataScienceCandidates = [
    {
      name: "Sakura Tanaka",
      role: "Data Science Intern",
      university: "Tokyo University",
      email: "sakura.tanaka@tokyo.edu",
      applied: "2023-10-05",
    },
    {
      name: "Nina Patel",
      role: "Data Science Intern",
      university: "MIT",
      email: "nina.patel@mit.edu",
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
            university={candidate.university}
            email={candidate.email}
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
            university={candidate.university}
            email={candidate.email}
            applied={candidate.applied}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipApp;
