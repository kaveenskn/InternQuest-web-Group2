import React from 'react';
import '../../styles/CmpDashboard.css';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const Dashboard = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 53000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 56000 },
    { month: 'Jun', revenue: 68000 },
  ];

  const hiringData = [
    { month: 'Jan', hires: 12 },
    { month: 'Feb', hires: 8 },
    { month: 'Mar', hires: 15 },
    { month: 'Apr', hires: 22 },
    { month: 'May', hires: 18 },
    { month: 'Jun', hires: 26 },
  ];

  const ratingData = [
    { name: '5 Stars', value: 45 },
    { name: '4 Stars', value: 30 },
    { name: '3 Stars', value: 15 },
    { name: '2 Stars', value: 7 },
    { name: '1 Star', value: 3 },
  ];

  const skills = ['DevOps', 'AI/ML', 'Node.js', 'Python', 'React'];

  const COLORS = ['#0b1444', '#f97316', '#facc15', '#60a5fa', '#f43f5e'];

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <div className="logo-section">
          <div className="logo-icon">🏢</div>
          <div>
            <h1>TechCorp Analytics</h1>
            <p>Performance Dashboard</p>
          </div><br />
        <div className="stats-grid">
          <div className="stat-card">
            <p>Overall Score</p>
            <h2>92%</h2>
          </div>
          <div className="stat-card">
            <p>Total Employees</p>
            <h2>1,247</h2>
          </div>
          <div className="stat-card">
            <p>Open Positions</p>
            <h2>24</h2>
          </div>
          <div className="stat-card">
            <p>Avg Rating</p>
            <h2>4.6</h2>
          </div>
        </div>
      </div>
      </div>

      <div className="dashboard-section">
        <div className="chart-card">
          <h3>Revenue Growth</h3>
          <p>Monthly revenue trends (in USD)</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#0f172a" strokeWidth={3} dot={{ fill: '#f97316' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Hiring Trends</h3>
          <p>Monthly new hires</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={hiringData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hires" fill="#f97316" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="chart-card">
          <h3>Skill Demand</h3>
          <p>Top in-demand skills (demand percentage)</p>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="chart-card">
          <h3>Employee Review Ratings</h3>
          <p>Distribution of employee ratings</p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={ratingData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {ratingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="testimonial-section">
        <h3>Employee Testimonials</h3>
        <p>What our team members say about working here</p>
        <div className="testimonial-grid">
          {[
            {
              initials: 'SJ',
              name: 'Sarah Johnson',
              role: 'Software Engineer',
              text: 'Amazing work culture and growth opportunities. The team is incredibly supportive and innovative.',
              stars: 5,
            },
            {
              initials: 'MC',
              name: 'Michael Chen',
              role: 'Product Manager',
              text: 'Best decision I made was joining this company. Great work-life balance and cutting-edge projects.',
              stars: 5,
            },
            {
              initials: 'ER',
              name: 'Emily Rodriguez',
              role: 'UX Designer',
              text: 'The collaborative environment here fosters creativity. Every day brings new learning opportunities.',
              stars: 4,
            },
          ].map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="avatar">{t.initials}</div>
              <h4>{t.name}</h4>
              <p className="role">{t.role}</p>
              <blockquote>"{t.text}"</blockquote>
              <div className="stars">{'⭐'.repeat(t.stars)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
