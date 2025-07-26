import React from "react";
import "../styles/InternshipApp.css";

const InternshipProfileCard = ({
  name,
  role,
  university,
  email,
  applied,
  onShortList = () => {},
  onViewProfile = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="application-card">
      {/* Card Header */}
      <div className="card-header">
        <div className="applicant-info">
          <div className="avatar">{name.charAt(0)}</div>
          <div className="applicant-details">
            <h4>{name}</h4>
            <p className="position">{role}</p>
            <p className="email">{email}</p>
          </div>
        </div>
        <div className="status-badge status-all">New</div>
      </div>

      {/* Card Body */}
      <div className="card-content">
        <div className="info-row">
          <span className="label">University:</span>
          <span className="value">{university}</span>
        </div>
        <div className="info-row">
          <span className="label">Applied:</span>
          <span className="value">{applied}</span>
        </div>
      </div>

      {/* Card Actions */}
      <div className="card-actions">
         <button className="view-profile-button view-profile" onClick={onViewProfile}>
          View Profile
        </button>
        <button className="view-profile-button shortlist" onClick={onShortList}>
          Short List
        </button>
        <button className="view-profile-button delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default InternshipProfileCard;
