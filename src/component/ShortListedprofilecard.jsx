import React from "react";
import "../styles/Shortedlistedprofilecard.css"; // Reuses same styles for consistency

const ShortlistedProfileCard = ({
  name,
  role,
  university,
  email,
  applied,
  onViewProfile = () => {},
  onContact = () => {},
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
        <div className="status-badge status-shortlisted">Shortlisted</div>
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
        <button className="view-profile-button" onClick={onViewProfile}>
          View Profile
        </button>
        <button className="view-profile-button" onClick={onContact}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default ShortlistedProfileCard;
