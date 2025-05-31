import React from "react";
import "../styles/aboutPage.css"; // Make sure this path is correct

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

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Job Opportunities</h1>
        <p className="hero-subtitle">
          Discover amazing career opportunities and find your next dream job
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <i className="fi fi-rr-users"></i>
            <span>4</span> Active Positions
          </div>
          <div className="stat-item">
            <i className="fi fi-rr-clock"></i>
            <span>Updated Daily</span>
          </div>
          <div className="stat-item">
            <i className="fi fi-rs-marker"></i>
            <span>Remote & On-site</span>
          </div>
        </div>
      </section>

      {/* Latest Job Postings */}
      <section className="job-postings">
        <h2>Latest Job Postings</h2>
        <p className="job-subtitle">
          Browse through our curated list of job opportunities from top companies
        </p>
        <div className="jobs-grid">
          {jobData.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <a href={job.companyLink} className="company-link">
                {job.company}
              </a>
              <div className="job-location">
                <i className="fi fi-ts-marker"></i>
                {job.location}
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-tags">
                <span className="job-type">{job.type}</span>
                <span className="salary-type">{job.salaryType}</span>
              </div>
              <div className="job-meta">
                <span>
                  <i className="fi fi-rr-users"></i> {job.applicants} applicants
                </span>
                <span>{job.posted}</span>
              </div>
              <div className="job-salary">
                Salary Range: <span className="salary-green">{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
