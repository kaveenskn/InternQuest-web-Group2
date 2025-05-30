import React from 'react';
import { FaSave } from 'react-icons/fa';
import "../styles/ProfileEditForm.css";

const ProfileEditForm = ({
  profile, setProfile,
  newSkill, setNewSkill,
  newProject, setNewProject,
  projects, setProjects,
  handleSaveProfile, message
}) => {
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) });
  };

  const handleAddProject = () => {
    const newId = projects.length ? projects[projects.length - 1].id + 1 : 1;
    setProjects([...projects, { id: newId, ...newProject }]);
    setNewProject({ title: '', description: '', tech_stack: '', link: '' });
  };

  return (
    <div className="profile-panel profile-form">
      <h3>Edit Profile</h3>
      <form>
        <label>Full Name</label>
        <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
        <label>Field of Study</label>
        <input type="text" name="course_of_study" value={profile.course_of_study} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={profile.email} onChange={handleChange} />
        <label>Phone</label>
        <input
  type="text"
  value={profile.phone}  
  onChange={(e) => setProfile({ ...profile, phone: e.target.value })} maxLength={10}
/>
        <label>GitHub Link</label>
        <input type="text" name="githubLink" value={profile.githubLink} onChange={handleChange} />
        <label>Location</label>
        <input type="text" name="universityLocation" value={profile.universityLocation} onChange={handleChange} />
        <label>Education</label>
        <input type="text" name="universityName" value={profile.universityName} onChange={handleChange} />

        <label>Add Skill</label>
        <div className="add-skill">
          <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />
          <button type="button" onClick={handleAddSkill}>Add</button>
        </div>

        <div className="skills">
          {(profile.skills || []).map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button type="button" onClick={() => handleRemoveSkill(index)}>×</button>
            </span>
          ))}
        </div>

        {message && <p className="save-message">{message}</p>}
      </form>

      <h3>Add Project</h3>
      <form className="project-form">
        <label>Title</label>
        <input type="text" value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
        <label>Description</label>
        <textarea value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
        <label>Tech Stack</label>
        <input type="text" value={newProject.tech_stack} onChange={(e) => setNewProject({ ...newProject, tech_stack: e.target.value })} />
        <label>Link</label>
        <input type="text" value={newProject.link} onChange={(e) => setNewProject({ ...newProject, link: e.target.value })} />
        <button type="button" onClick={handleAddProject}>Add Project</button>
      </form>

      <button type="button" className="save-button" onClick={handleSaveProfile}>
        <FaSave /> Save
      </button>
    </div>
  );
};

export default ProfileEditForm;
