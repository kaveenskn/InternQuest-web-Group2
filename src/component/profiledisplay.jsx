import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaUser, FaCode, FaGithub } from 'react-icons/fa';
import '../styles/ProfileDisplay.css';

const ProfileDisplay = ({ profile, projects }) => {
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <p className="profile-tag">Intern Quest Profile</p>
        <h1>Shape Your Future</h1>
        <p className="subtext">Showcase your journey, skills, and achievements in your personalized intern profile</p>
      </div>

      {/* Top Profile Card */}
      <div className="profile-content">
      <div className="profile-card">
        <div className="avatar-circle">
          <FaUser size={50} color="#555" />
        </div>
        <div className="profile-info">
          <h2>{profile.fullname}</h2>
          <p className="role">{profile.course_of_study}</p>
          <div className="meta">
            <span><FaMapMarkerAlt size={12} /> {profile.universityLocation}</span>
            <span><FaGraduationCap size={12} /> {profile.universityName}</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="section">
        <h3><FaEnvelope /> Contact Information</h3>
        <div className="contact-boxes">
          <div className="email-box">
            <FaEnvelope /> <span>{profile.email}</span>
          </div>
          <div className="phone-box">
            <FaPhone /> <span>{profile.phone}</span>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className="section">
        <h3><FaGithub /> GitHub</h3>
        <a href={profile.githubLink} target="_blank" rel="noreferrer" className="github-link">{profile.githubLink}</a>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>🛠️ Technical Skills</h3>
        <div className="skill-tags">
          {profile.skills.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="section">
        <h3>🏆 Projects</h3>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="project-list">
            {projects.map((proj) => (
              <div key={proj._id} className="project-card">
                <FaCode size={18} />
                <div className="project-details">
                  <h4>{proj.title}</h4>
                  <p className="tech">{proj.tech_stack}</p>
                  <p>{proj.description}</p>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="live-link">Live</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
