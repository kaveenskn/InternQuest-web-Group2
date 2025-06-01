import React from "react";
import "../styles/InternshipApplication.css";

const InternshipHeader = () => {
  return (
    <div className="header">
      <h1>Internship Applications</h1>
      <p>Review and manage candidate applications by job position</p>
      <div className="status-bar">
        <span className="applications">6 Applications</span>
        <span className="jobs">2 Jobs</span>
      </div>
    </div>
  );
};

export default InternshipHeader;
