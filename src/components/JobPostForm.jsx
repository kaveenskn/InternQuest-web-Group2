import React, { useState } from 'react';
import './JobPostForm.css';

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Temporary',
  'Remote',
];

function JobPostForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Job Posted!\n' + JSON.stringify(formData, null, 2));
    // Here you can add your API call or other logic
  };

  const handleClear = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: '',
      description: '',
    });
  };

  return (
    <div className="job-post-container">
      <h2 className="form-title">Create a New Job Posting</h2>
      <p className="form-subtitle">Fill in the details to post a new job opportunity</p>
      <form className="job-post-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Job Title*
          <input
            type="text"
            name="title"
            placeholder="e.g., Senior Frontend Developer"
            value={formData.title}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>

        <label className="input-label">
          Company Name*
          <input
            type="text"
            name="company"
            placeholder="e.g., Acme Corporation"
            value={formData.company}
            onChange={handleChange}
            required
            className="input-field"
          />
        </label>

        <div className="row">
          <label className="input-label half-width">
            Job Location*
            <input
              type="text"
              name="location"
              placeholder="e.g., New York, NY or Remote"
              value={formData.location}
              onChange={handleChange}
              required
              className="input-field"
            />
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
              <option value="" disabled>
                Select job type
              </option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

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
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear Form
          </button>
          <button type="submit" className="post-btn">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobPostForm;
