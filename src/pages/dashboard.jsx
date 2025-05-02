import React from "react";
import Navbar from "../component/navbar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard-left">
          <h1>Welcome Back!</h1>
          <p>Your internship journey continues</p>
          <button className="find-internships-btn">🔍 Find Internships</button>
          <button className="update-profile-btn">📝 Update Profile</button>
          <button className="manage-cv-btn">📚 Manage CV</button>

          <div className="profile-completion">
            <h2>Profile Completion</h2>
            <p>Update your profile to increase visibility</p>
            <div className="progress-bar">
              <span>Profile Strength</span>
              <div className="progress">
                <div className="progress-fill" style={{ width: "75%" }}>
                  75%
                </div>
              </div>
            </div>
            <p>Complete these steps to improve your profile:</p>
            <ul>
              <li>📷 Add a profile picture</li>
              <li>📜 Complete the experience section</li>
            </ul>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-item">
              <span className="icon">🔔</span>
              <p>
                Your application to Software Engineering Intern at TechCorp has
                been viewed
              </p>
              <span className="time">2 hours ago</span>
            </div>
            <div className="activity-item">
              <span className="icon">🔔</span>
              <p>
                New internship posted that matches your skills: Data Science
                Intern at DataDrive
              </p>
              <span className="time">1 day ago</span>
            </div>
            <div className="activity-item">
              <span className="icon">🔔</span>
              <p>Your profile was viewed by 3 employers this week</p>
              <span className="time">2 days ago</span>
            </div>
          </div>

          <div className="recommended-jobs">
            <h2>Recommended For You</h2>
            <a href="#" className="view-all">
              View All
            </a>
            <div className="job-card">
              <h3>Software Engineering Intern</h3>
              <p>TechCorp</p>
              <p>📍 San Francisco, CA</p>
              <span className="job-type">Full-time</span>
              <p>🖥️ Software Development</p>
            </div>
            <div className="job-card">
              <h3>Marketing Intern</h3>
              <p>BrandMasters</p>
              <p>📍 New York, NY</p>
              <span className="job-type">Part-time</span>
              <p>📈 Marketing</p>
              <p>⏰ Posted 1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
