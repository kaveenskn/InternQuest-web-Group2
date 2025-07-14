import React from "react";
import "../../styles/Mentorship.css";

const MentorshipFinder = () => {
  return (
    <div className="mentorship-page">
      {/* Top Hero Section */}
      <section className="mentorship-hero">
        <div className="mentorship-hero-left">
          <button className="mentorship-badge">🚀 Where careers begin</button>
          <h1>
            Transform Your Future with{" "}
            <span className="mentorship-highlight">Elite Mentorship</span>
          </h1>
          <p>
            Connect with industry leaders, unlock hidden opportunities, and
            accelerate your career journey with personalized guidance from the
            world's top professionals.
          </p>
          <div className="mentorship-search">
            <input
              type="text"
              placeholder="Find your perfect mentor..."
              className="mentorship-input"
            />
            <button className="mentorship-launch-btn">🚀 Launch Journey</button>
          </div>
        </div>
        <div className="mentorship-hero-right">
          <div className="mentorship-card-preview">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328f1f4c"
              alt="Sarah Johnson"
              className="mentorship-preview-photo"
            />
            <div className="mentorship-preview-info">
              <h3>Sarah Johnson</h3>
              <p>Senior Engineer @ Google</p>
              <div className="mentorship-rating">⭐ 4.9</div>
            </div>
          </div>
          <div className="mentorship-stat">
            <p>
              <strong>127%</strong>
              <br />
              Salary Increase
            </p>
          </div>
        </div>
      </section>

      {/* Mentor Cards Section */}
      <section className="mentorship-mentors">
        <h2>Meet Your Mentors</h2>
        <p className="mentorship-subtitle">
          Industry leaders ready to guide your journey
        </p>
        <div className="mentorship-card-container">
          {/* Mentor Card 1 */}
          <div className="mentorship-card">
            <div className="mentorship-avatar">SJ</div>
            <div className="mentorship-status">● Available</div>
            <h3>Sarah Johnson</h3>
            <p className="mentorship-position">Senior Software Engineer</p>
            <a href="#" className="mentorship-company">Google</a>
            <div className="mentorship-rating">
              ⭐ 4.9 <span>(127 reviews)</span>
            </div>
            <div className="mentorship-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>System Design</span>
            </div>
            <p className="mentorship-location">📍 San Francisco, CA</p>
            <div className="mentorship-card-footer">
              <p className="mentorship-price">$80/hour</p>
              <button className="mentorship-connect-btn">💬 Connect Now</button>
            </div>
          </div>

          {/* Mentor Card 2 */}
          <div className="mentorship-card">
            <div className="mentorship-avatar-img">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Michael Chen"
              />
            </div>
            <div className="mentorship-status">● Available</div>
            <h3>Michael Chen</h3>
            <p className="mentorship-position">Product Manager</p>
            <a href="#" className="mentorship-company">Microsoft</a>
            <div className="mentorship-rating">
              ⭐ 4.8 <span>(89 reviews)</span>
            </div>
            <div className="mentorship-skills">
              <span>Product Strategy</span>
              <span>User Research</span>
              <span>Agile</span>
            </div>
            <p className="mentorship-location">📍 Seattle, WA</p>
            <div className="mentorship-card-footer">
              <p className="mentorship-price">$95/hour</p>
              <button className="mentorship-connect-btn">💬 Connect Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipFinder;
