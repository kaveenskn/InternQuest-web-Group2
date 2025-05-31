import React, { useState, useEffect } from 'react';
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
         alert("got data: " + error.message);
        if (data) {
          setProfile({
              fullname: data.user?.name || data.fullname || '',
              email: data.user?.email || data.email || '',
              universityName: data.user?.universityName || data.universityName || '',
              universityLocation: data.universityLocation || '',
              course_of_study: data.course_of_study || '',
              phone: data.phone || '',
              github_link: data.github_link || '',
              skills: data.skills || [],
              projects: data.projects || [],
            });

          setProjects(data.projects?.length ? data.projects : []);
        } else {
          setProfile(emptyProfile);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert("can not connect: " + error.message);
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
        fullname: profile.fullname,
        universityName: profile.universityName,
        universityLocation: profile.universityLocation, 
        course_of_study: profile.course_of_study,
        phone: profile.phone,
        github_link: profile.github_link,
        skills: profile.skills,
        projects: projects,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const updated = res.data;

      setProfile(prevProfile => ({
        ...prevProfile,
        fullname: updated.fullname || prevProfile.fullname,
        universityName: updated.universityName || prevProfile.universityName,
        universityLocation: updated.universityLocation || prevProfile.universityLocation,
        course_of_study: updated.course_of_study || prevProfile.course_of_study,
        phone: updated.phone || prevProfile.phone,
        github_link: updated.github_link || prevProfile.github_link,
        skills: updated.skills?.length ? updated.skills : prevProfile.skills,
        projects: updated.projects?.length ? updated.projects : prevProfile.projects,
      }));

      setProjects(updated.projects?.length ? updated.projects : projects);

      setMessage('Profile saved successfully!');
      alert('Profile saved successfully!');
    } catch (err) {
      setMessage('Error saving profileaaaa: ' + err.message);
      alert("errors many")
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
