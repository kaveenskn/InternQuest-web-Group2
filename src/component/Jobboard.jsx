import React, { useEffect, useState } from "react";
import "../styles/Jobboard.css";

const Jobboard = () => {
  const [jobs, setJobs] = useState([]);

 useEffect(() => {
  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token"); // Adjust based on where you store the token

      const response = await fetch("http://localhost:5000/api/employee/jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setJobs(data); // since your backend returns the formatted array directly
      } else {
        console.error("Failed to fetch jobs:", data.message);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err.message);
    }
  };

  fetchJobs();
}, []);


  return (
    <div className="about-bg">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Job Opportunities</h1>
        <p className="about-hero-subtitle">
          Discover amazing career opportunities and find your next dream job
        </p>
        <div className="about-stats-row">
          <div className="about-stat">
            <i className="fi fi-rr-users"></i>
            <span className="about-stat-main">{jobs.length}</span>
            <span>Active Positions</span>
          </div>
          <div className="about-stat">
            <i className="fi fi-rr-clock"></i>
            <span className="about-stat-main"></span>
            <span>Updated Daily</span>
          </div>
          <div className="about-stat">
            <i className="fi fi-rr-marker"></i>
            <span className="about-stat-main"></span>
            <span>Remote & On-site</span>
          </div>
        </div>
      </section>

      {/* Job Cards */}
      <section className="about-job-container">
        <h2>Latest Job Postings</h2>
        <p className="about-job-subtitle">
          Browse through our curated list of job opportunities from top companies
        </p>

        <div className="about-job-grid">
                {jobs.length === 0 ? (
                  <p>No job postings found.</p>
                ) : (
                  jobs.map((job, idx) => (
            <div key={idx} className="about-job-card">
              <h3>{job.title}</h3>
              <a href="#" className="about-company-link">
                {job.companyName} {/* fetched from employer */}
              </a>
              <div className="about-job-location">
                <i className="fi fi-rr-marker"></i>
                {job.location}
              </div>
              <p className="about-job-desc">{job.description}</p>
              <div className="about-job-tags">
                <span className="about-job-type">{job.jobType}</span>
              </div>
              <div className="about-job-meta">
                <span>
                  <i className="fi fi-rr-clock"></i> Apply before: {job.deadline}
                </span>
              </div>
            </div>
          ))
                )}



         
        </div>
      </section>
    </div>
  );
};

export default Jobboard;
