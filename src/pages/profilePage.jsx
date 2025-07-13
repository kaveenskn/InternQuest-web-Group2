import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaTrophy, FaStar } from 'react-icons/fa';
import axios from 'axios';
import ProfileDisplay from '../component/profiledisplay';
import ProfileEditForm from '../component/profileEditForm';
import '../pagestyles/ProfilePage.css';

const emptyProfile = {
  fullname: '',
  email: '',
  universityName: '',
  universityLocation: '',
  course_of_study: '',
  phone: '',
  github_link: '',
  skills: [],
  projects: [],
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(emptyProfile);
  const [projects, setProjects] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', tech_stack: '', link: '' });
  const [message, setMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/students/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;
        if (data) {
          const formattedProfile = {
            fullname: data.fullname || '',
            email: data.user?.email || data.email || '',
            universityName: data.user?.universityName || data.universityName || '',
            universityLocation: data.universityLocation || '',
            course_of_study: data.course_of_study || '',
            phone: data.phone || '',
            github_link: data.github_link || '',
            skills: data.skills || [],
            projects: data.projects || [],
          };
          setProfile(formattedProfile);
          setProjects(formattedProfile.projects);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        
        setProfile(emptyProfile);
        setProjects([]);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:5000/api/students/profile', {
        ...profile,
        projects,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const updated = res.data;
      setProfile(prev => ({
        ...prev,
        ...updated,
        skills: updated.skills || prev.skills,
        projects: updated.projects || prev.projects,
      }));
      setProjects(updated.projects || []);
      alert('Profile saved successfully!');
    } catch (err) {
      alert("Error saving profile: " + err.message);
    }
  };

  return (
    <div className="profilehome-container">
      {/* If not showing profile yet */}
      {!showProfile ? (
        <>
          {/* Hero Section */}
          <section className="profilehome-hero">
            <p className="profilehome-badge"> Welcome to Intern Quest</p>
            <h1 className="profilehome-title">Build Your Future</h1>
            <p className="profilehome-subtitle">
              Create and showcase your professional profile, track your internship journey, and
              connect with opportunities that shape your career path.
            </p>
            <button className="profilehome-button" onClick={() => setShowProfile(true)}>
              View My Profile →
            </button>
          </section>

          {/* Feature Section */}
          <section className="profilehome-features">
            <h2 className="profilehome-heading">Your Journey Starts Here</h2>
            <p className="profilehome-subheading">
              Discover the powerful features that help you showcase your potential and advance your career
            </p>
            <div className="profilehome-feature-grid">
              <div className="profilehome-feature-card">
                <FaUserCircle size={30} color="#8b5cf6" />
                <h3>Professional Profile</h3>
                <p>Create a comprehensive profile that highlights your skills, experiences, and achievements to potential employers.</p>
              </div>
              <div className="profilehome-feature-card">
                <FaTrophy size={30} color="#10b981" />
                <h3>Track Achievements</h3>
                <p>Document your projects, certifications, and milestones as you progress through your internship journey.</p>
              </div>
              <div className="profilehome-feature-card">
                <FaStar size={30} color="#ef4444" />
                <h3>Showcase Skills</h3>
                <p>Display your technical and soft skills in an organized, visually appealing format that stands out.</p>
              </div>
            </div>
            <button className="profilehome-cta" onClick={() => setShowProfile(true)}>
              Get Started Now →
            </button>
          </section>
        </>
      ) : (
        <>
          {/* Profile View Section */}
            <ProfileDisplay profile={profile} projects={projects} />
        <ProfileEditForm
          profile={profile}
          setProfile={setProfile}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          newProject={newProject}
          setNewProject={setNewProject}
          projects={projects}
          setProjects={setProjects}
          handleSaveProfile={handleSaveProfile}
          message={message}
        />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
