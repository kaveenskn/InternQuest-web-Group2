import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDisplay from '../component/profiledisplay';
import ProfileEditForm from '../component/profileEditForm';
import '../pagestyles/ProfilePage.css';

const emptyProfile = {
  fullName: '',
  email: '',
  universityName: '',
  universityLocation: '',
  course_of_study: '',
  phone: '',
  githubLink: '',
  skills: [],
  projects: [],
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(emptyProfile);
  const [projects, setProjects] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', tech_stack: '', link: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const email = "someone@example.com";  // your test email
        const res = await axios.get(`/api/students/profile?email=${encodeURIComponent(email)}`);
        const data = res.data;

        if (data) {
          setProfile({
            fullName: data.user?.name || data.fullName || '',
            email: data.user?.email || data.email || '',
            universityName: data.user?.universityName || data.universityName || '',
            universityLocation: data.universityLocation || '',
            course_of_study: data.course_of_study || '',
            phone: data.phone || '',
            githubLink: data.github_link || '',
            skills: data.skills || [],
            projects: data.projects || [],
          });

          setProjects(data.projects || []);
        } else {
          // If no data returned, keep empty states
          setProfile(emptyProfile);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // On error, also keep empty state for graceful fallback
        setProfile(emptyProfile);
        setProjects([]);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      // Your backend saving logic here
      // For now, just mock:
      setMessage('Profile saved successfully!');
    } catch (err) {
      setMessage('Error saving profile: ' + err.message);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-container">
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
      </div>
    </div>
  );
};

export default ProfilePage;
