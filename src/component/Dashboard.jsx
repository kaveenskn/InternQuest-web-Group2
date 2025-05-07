import React from 'react'

import '../styles/Dashboard.css'
import { IoMdNotificationsOutline } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
  <div className="left-panel">
    <div className="welcome-box">
      <h2>Welcome Back!</h2>
      <p>Your internship journey continues</p>
      <button className="find-btn">🔍 Find Internships</button>
      <button className="secondary-btn">📄 Update Profile</button>
      <button className="secondary-btn">🗂️ Manage CV</button>
    </div>

    <div className="profile-box">
      <h3>Profile Completion</h3>
      <p>Update your profile to increase visibility</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: '75%' }}></div>
      </div>
      <ul>
        <li>Add a profile picture</li>
        <li>Complete your experience section</li>
      </ul>
    </div>
  </div>

  <div className="right-panel">
    <div className="recent-activity-box">
      <div className="header">
        <span className="icon"><IoMdNotificationsOutline/></span>
        <h2>Recent Activity</h2>
      </div>
      <div className="activity-card">
        <span className="icon"><IoMdNotificationsOutline/></span>
        <div>
          <p>Your application to Software Engineering Intern at TechCorp has been viewed</p>
          <small>2 hours ago</small>
        </div>
      </div>
      <div className="activity-card">
        <span className="icon"><IoMdNotificationsOutline/></span>
        <div>
          <p>New internship posted that matches your skills: Data Science Intern at DataDrive</p>
          <small>1 day ago</small>
        </div>
      </div>
      <div className="activity-card">
        <span className="icon"><IoMdNotificationsOutline/></span>
        <div>
          <p>Your profile was viewed by 3 employers this week</p>
          <small>2 days ago</small>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Dashboard
