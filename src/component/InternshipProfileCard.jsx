import React from "react";
import "../styles/InternshipApp.css";

const InternshipProfileCard = ({
  name,
  role,
  university,
  email,
  applied,
  onShortList = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>🎓 {university}</p>
        <p>📧 {email}</p>
        <p>📅 Applied {applied}</p>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button className="view-button" onClick={onShortList}>
          Short List
        </button>
        <button className="view-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default InternshipProfileCard;
