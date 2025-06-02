import React from "react";
import "../styles/Jobboard.css";

const jobData = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description:
      "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for...",
    type: "Full-time",
    salaryType: "Salary",
    applicants: 24,
    posted: "2 days ago",
    salary: "$120,000 - $150,000",
    salaryColor: "green",
    companyLink: "#",
  },

  {
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    description:
      "Join our growing startup as a Product Manager. You will lead product development initiatives and work closely...",
    type: "Full-time",
    salaryType: "Salary",
    applicants: 18,
    posted: "1 week ago",
    salary: "$100,000 - $130,000",
    salaryColor: "green",
    companyLink: "#",
  },
  
  {
    title: "UX/UI Designer",
    company: "Design Studio Pro",
    location: "Austin, TX",
    description:
      "We are seeking a creative UX/UI Designer to create engaging and intuitive user experiences. You will collaborate with...",
    type: "Contract",
    salaryType: "Salary",
    applicants: 31,
    posted: "3 days ago",
    salary: "$80,000 - $100,000",
    salaryColor: "green",
    companyLink: "#",
  },
];

const Jobboard = () => {
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
            <span className="about-stat-main">4</span>
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

      {/* Card Container for Job Postings */}
      <section className="about-job-container">
        <h2>Latest Job Postings</h2>
        <p className="about-job-subtitle">
          Browse through our curated list of job opportunities from top companies
        </p>

        <div className="about-job-grid">
          {jobData.map((job, idx) => (
            <div key={idx} className="about-job-card">
              <h3>{job.title}</h3>
              <a href={job.companyLink} className="about-company-link">
                {job.company}
              </a>
              <div className="about-job-location">
                <i className="fi fi-rr-marker"></i>
                {job.location}
              </div>
              <p className="about-job-desc">{job.description}</p>
              <div className="about-job-tags">
                <span className="about-job-type">{job.type}</span>
                <span className="about-salary-type">{job.salaryType}</span>
              </div>
              <div className="about-job-meta">
                <span>
                  <i className="fi fi-rr-users"></i> {job.applicants} applicants
                </span>
                <span>{job.posted}</span>
              </div>
              <div className="about-job-salary">
                Salary Range: <span className="about-salary-green">{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobboard;
