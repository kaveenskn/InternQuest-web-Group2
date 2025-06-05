import React from "react";
import "../styles/employeeFooter.css";
import { FaChartBar, FaFileAlt, FaBullhorn, FaCrown } from "react-icons/fa";

const EmployeeFooter = () => {
  return (
    <section className="internship-gateway-section">
      <h2 className="section-title">Your Gateway to Top Internships</h2>

      <div className="cards-container">
        <div className="feature-card">
          <div className="card-icon smart-job-icon">
            <FaChartBar />
          </div>
          <h3 className="card-title">Smart Job Filtering</h3>
          <p className="card-description">
            Find internships that match your skills and interests with our
            intelligent filters.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card">
          <div className="card-icon profile-opt-icon">
            <FaFileAlt />
          </div>
          <h3 className="card-title">Profile Optimization</h3>
          <p className="card-description">
            Create a standout profile to get noticed by top recruiters and
            companies.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card highlight-card">
          <div className="card-icon instant-notif-icon">
            <FaBullhorn />
          </div>
          <h3 className="card-title">Instant Notifications</h3>
          <p className="card-description">
            Get real-time updates for new internship postings and application
            status.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card">
          <div className="card-icon top-intern-icon">
            <FaCrown />
          </div>
          <h3 className="card-title">Top Internships</h3>
          <p className="card-description">
            Access exclusive opportunities from leading startups and MNCs.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmployeeFooter;
