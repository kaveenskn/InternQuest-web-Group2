import React from "react";
import "../styles/InternshipApp.css";

const InternshipHeader = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1> 👤 Internship Applications</h1>
        <p>Review and manage candidate applications by job position</p>
      </div>
      <div className="status-bar">
        <span className="applications">8 Applications</span>
        <span className="jobs">3 Jobs</span>
      </div>
    </div>
  );
};

export default InternshipHeader;
