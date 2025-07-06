import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaUser, FaCode } from 'react-icons/fa';
import '../pagestyles/StudentsProfile.css';

const StudentProfilePage = () => {
  const { email } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/students/profile/${email}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch profile');
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [email]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!profile) return null;

  return (
    <div className="student-profile">
      <div className="left-panel">
        <div className="profile-picture"><FaUser size={80} /></div>
        <h2>{profile.fullname}</h2>
        <p className="title">{profile.course_of_study}</p>

        <div className="section">
          <h4><FaGraduationCap /> Education</h4>
          <p>{profile.universityName}</p>
        </div>

        <div className="section">
          <h4><FaMapMarkerAlt /> University Location</h4>
          <p>{profile.universityLocation}</p>
        </div>

        <div className="section">
          <h4>Contact</h4>
          <p><FaEnvelope /> {profile.email}</p>
          <p><FaPhone /> {profile.phone}</p>
        </div>

        <div className="section">
          <h4>GitHub</h4>
          <a href={profile.githubLink} target="_blank" rel="noreferrer">View GitHub Profile</a>
        </div>
      </div>

      <div className="right-panel">
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {profile.skills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h3>Projects</h3>
          {profile.projects.map((proj) => (
            <div className="project-card" key={proj._id}>
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

export default StudentProfilePage;
