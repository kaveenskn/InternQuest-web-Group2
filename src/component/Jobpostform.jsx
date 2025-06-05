import React, { useState } from 'react';
import "../styles/Jobpostform.css";

const jobTypes = [
  'Onsite',
  'Remote',
  'Hybrid',
];

const joblocation = [
  'Ampara',
  'Anuradhapura',
  'Badulla',
  'Batticaloa',
  'Colombo',
  'Galle',
  'Gampaha',
  'Hambantota',
  'Jaffna',
  'Kalutara',
  'Kandy',
  'Kegalle',
  'Kilinochchi',
  'Kurunegala',
  'Mannar',
  'Matale',
  'Matara',
  'Moneragala',
  'Mullaitivu',
  'Nuwara Eliya',
  'Polonnaruwa',
  'Puttalam',
  'Ratnapura',
  'Trincomalee',
  'Vavuniya'
];


const jobTitles = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
  'Project Manager',
  'Data Analyst',
  'QA Tester',
  'DevOps Engineer'
];




function Jobpostform() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    description: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token'); // Or get from context/store

  if (!token) {
    alert('You must be logged in to post a job.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/employers/postjob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Send token
      },
      body: JSON.stringify(formData), // Ensure formData has keys: title, location, jobType, description, deadline
    });

    const result = await response.json();

    if (response.ok) {
      alert('Job posted successfully!');
     
    } else {
      alert(`Error: ${result.message || 'Job post failed'}`);
    }
  } catch (error) {
    alert('Error posting job:server Error ');
  }
};


  const handleClear = () => {
    setFormData({
      title: '',
      location: '',
      jobType: '',
      description: '',
      deadline: '',
    });
  };

  return (
    <div className="job-post-container">
      <div className="job-post-form">
        <h2 className="form-title">Create a New Job Posting</h2>
        <p className="form-subtitle">Fill in the details to post a new job opportunity</p>

        <form onSubmit={handleSubmit}>
          <label className="input-label">
            Job Title*
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="" disabled>Select job title</option>
              {jobTitles.map((job) => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
          </label>

          <div className="row">
            <label className="input-label half-width">
              Job Location*
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="" disabled>Select location</option>
                {joblocation.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </label>

            <label className="input-label half-width">
              Job Type*
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="" disabled>Select job type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="input-label">
            Application Deadline*
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>

          <label className="input-label">
            Job Description*
            <textarea
              name="description"
              placeholder="Describe the job responsibilities, requirements, benefits, etc."
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="textarea-field"
            />
          </label>

          <div className="button-row">
            <button type="button" className="clear-btn" onClick={handleClear}>Clear Form</button>
            <button type="submit" className="post-btn" onClick={handleSubmit}>Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jobpostform;
