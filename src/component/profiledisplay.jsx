
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaUser, FaCode } from 'react-icons/fa';
import "../styles/ProfileDisplay.css"


const ProfileDisplay = ({ profile, projects }) => {
  return (
    <div className="profile-panel profile-preview">
      <div className="profilehead">
        <div className="profile-picture"><FaUser size={50} color="#ccc" /></div>
        <h2 style={{ color: "white", fontSize: "35px", fontFamily: "'Bebas Neue', sans-serif" }}>{profile.fullname}</h2>
        <p className="sub"style={{
                                    color: "white",
                                    fontSize: "25px",
                                    wordBreak: "break-word",
                                    textAlign: "center",
                                    whiteSpace: "normal" }}>
                          {profile.course_of_study}
      </p>
      </div>
      

     <div className="section">
        <h4>Education</h4>
        <p><FaGraduationCap size={12} /> {profile.universityName}</p>
      </div>

      <div className="section">
          <h4>University Location</h4>
          <div className="location" style={{ marginTop: "15px" }}><FaMapMarkerAlt size={12} /> {profile.universityLocation}</div>
      </div>

      
      <div className="section">
        <h4>Contact</h4>
        <p><FaEnvelope size={12} /> {profile.email}</p>
        <p><FaPhone size={12} /> {profile.phone}</p>
      </div>

      <div className="section">
        <h4>GitHub</h4>
        <a href={profile.githubLink} target="_blank" rel="noopener noreferrer">{profile.github_link}</a>
      </div>

     

      <div className="section">
        <h4>Skills</h4>
        <div className="skills">
          {profile.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h4>Projects</h4>
        <div className="project-cards">
          {projects.map((proj) => (
            <div key={proj._id} className="project-card">
              <FaCode size={18} />
              <h5>{proj.title}</h5>
              <p className="tech">{proj.tech_stack}</p>
              <p>{proj.description}</p>
              {proj.link && <a href={proj.link} target="_blank" rel="noreferrer">Live</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
