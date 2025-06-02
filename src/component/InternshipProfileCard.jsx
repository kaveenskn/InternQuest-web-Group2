import React from "react";
import "../styles/InternshipApp.css";

const InternshipProfileCard = ({
  name,
  role,
  status,
  university,
  gpa,
  applied,
  onViewProfile = () => {},
}) => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>🏫 {university}</p>
        <p>⭐ GPA:{gpa}</p>
        <p>📅 Applied {applied}</p>
      </div>
      <div className={`status ${status.toLowerCase()}`}>{status}</div>
      <div>
        <button className="view-button" onClick={onViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default InternshipProfileCard;
