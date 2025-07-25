import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../../styles/Student-dashboard.css";

const StudentDashboard= () => {
  const gpaData = [
    { semester: "Fall 2022", gpa: 3.3 },
    { semester: "Spring 2023", gpa: 3.5 },
    { semester: "Fall 2023", gpa: 3.7 },
    { semester: "Spring 2024", gpa: 3.75 },
    { semester: "Fall 2024", gpa: 3.8 },
  ];

  return (
    <div className="std-dashboard-container">
        <div className="std-dashboard-topbanner">
      <h2 className="std-dashboard-welcome">
        Welcome back, 👋
      </h2>
      <p className="std-dashboard-subtitle">
        Here's your learning progress and recent activities
      </p>

      <div className="std-dashboard-topcards">
        <div className="std-dashboard-card">
          <p>Completed Courses</p>
          <h3>12</h3>
          <span className="std-dashboard-green">+2 this month</span>
        </div>
        <div className="std-dashboard-card">
          <p>Skill Level</p>
          <h3>Advanced</h3>
          <span className="std-dashboard-purple">Top 15%</span>
        </div>
        <div className="std-dashboard-card">
          <p>Study Hours</p>
          <h3>124h</h3>
          <span className="std-dashboard-orange">+18h this week</span>
        </div>
        <div className="std-dashboard-card">
          <p>Next Deadline</p>
          <h3>3 days</h3>
          <span>React Project</span>
        </div>
      </div>
     </div>

      <div className="std-dashboard-main">
        <div className="std-dashboard-skill-assessment">
          <div className="std-dashboard-title-row">
            <h4>Skill Assessment</h4>
            <button className="std-dashboard-button">Take Test</button>
          </div>
          {[
            { label: "JavaScript", value: 85 },
            { label: "React", value: 78 },
            { label: "Database Design", value: 65 },
            { label: "Problem Solving", value: 92 },
          ].map((skill, idx) => (
            <div key={idx} className="std-dashboard-skill-bar">
              <div className="std-dashboard-skill-label">
                {skill.label}
                <span>{skill.value}%</span>
              </div>
              <div className="std-dashboard-bar-bg">
                <div
                  className="std-dashboard-bar-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
          <p className="std-dashboard-green">
            Overall improvement: +12% this month
          </p>
        </div>

        <div className="std-dashboard-gpa">
          <h4>GPA Evolution</h4>
          <h2>3.8</h2>
          <p>
            <span className="std-dashboard-green">+2.7%</span> vs last semester
          </p>

          <div className="std-dashboard-chart">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={gpaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis domain={[2.5, 4]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="gpa"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="std-dashboard-milestone">
            🎯 Next milestone: <strong>Achieve 3.9 GPA by Spring 2025</strong>
          </div>
        </div>
      </div>

      <div className="std-dashboard-activities">
        <h4>Recent Activities</h4>
        <ul>
          <li>
            ✅ Completed JavaScript Advanced Course{" "}
            <span className="std-dashboard-tag">Course</span>
            <span className="std-dashboard-time">2 hours ago</span>
          </li>
          <li>
            🧪 Skill Assessment: React Fundamentals{" "}
            <span className="std-dashboard-tag orange">Assessment</span>
            <span className="std-dashboard-time">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
