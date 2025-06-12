import React from "react";
// import "../styles/employeeFooter.css";
import { FaChartBar, FaFileAlt, FaBullhorn, FaCrown } from "react-icons/fa";

const EmployeeFooter = () => {
  return (
    <section className="internship-gateway-section">
      <h2 className="section-title">Spark Your Creativity</h2>

      <div className="cards-container">
        <div className="feature-card">
          <div className="card-icon smart-job-icon">
            <FaChartBar />
          </div>
          <h3 className="emp-card-title">Personalized Dashboard</h3>
          <p className="emp-card-description">
            Track your progress, explore new opportunities, and stay connected
            with your team.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card">
          <div className="card-icon profile-opt-icon">
            <FaFileAlt />
          </div>
          <h3 className="card-title">Quick Access & Insights</h3>
          <p className="card-description">
            Get real-time updates on your tasks, important announcements, and
            key performance metrics.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card highlight-card">
          <div className="card-icon instant-notif-icon">
            <FaBullhorn />
          </div>
          <h3 className="card-title">Boost Your Productivity</h3>
          <p className="card-description">
            Find essential resources, manage your workflow, and collaborate
            seamlessly with colleagues.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>

        <div className="feature-card">
          <div className="card-icon top-intern-icon">
            <FaCrown />
          </div>
          <h3 className="card-title">Employee Hub</h3>
          <p className="card-description">
            Your central place for all work-related information, tools, and
            updates.
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
