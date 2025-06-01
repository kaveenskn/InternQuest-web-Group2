import React from "react";
import "../styles/InternshipApplication.css";

const ProfileCard = ({ name, major, university, gpa, date, status }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h3>{name}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <p>{major}</p>
      <p className="university">🏫 {university}</p>
      <p className="gpa">⭐ GPA: {gpa}</p>
      <p className="applied-date">📅 Applied {date}</p>
      <button className="view-profile">View Profile</button>
    </div>
  );
};

export default ProfileCard;
