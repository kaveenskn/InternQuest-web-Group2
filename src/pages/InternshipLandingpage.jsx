import React from "react";
import "../pagestyles/InternshipLanding.css"
import { FaSearch, FaUserCheck, FaBullhorn, FaFilter, FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";


const InternshipLandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-hero-section">
        <h1>InternQuest!</h1>
        <br />
         <p className="hero-ctn">  
          Discover internship opportunities and post openings to connect students with real-world experience.
         </p>
       
        <div className="auth-buttons">
          <button className="btn sign-in">Sign in</button>
          <button className="btn sign-up">Sign up</button>
        </div>
      </header>

      <section className="features-section">
        <h2>Your Internship Search Made Easy</h2>
        <div className="features">
          <div className="feature-card">
  <div className="card-title">
    <span className="icon"><FaFilter /></span>
  <h3>Find Opportunities</h3>
  </div>
  <p>Search and filter through hundreds of internship opportunities that match your skills and interests.</p>
</div>

<div className="feature-card">
  <div className="card-title">
     <span className="icon"><FaUserCircle /></span>
  <h3>Manage Your Profile</h3>
  </div>
 
  <p>Create a standout profile highlighting your skills, experience, and educational background.</p>
</div>

<div className="feature-card">
  <div className="card-title">
    <span className="icon"><FaRegCalendarAlt /></span>
    <h3>Track Applications</h3>
  </div>
  <p>Save your favorite internships and keep track of application deadlines and status.</p>
</div>

<div className="feature-card">
  <div className="card-title">
       <span className="icon"><FaSearch /></span>
        <h3>Post Internship</h3>
  </div>
  <p>Organizations can easily post internship openings and connect with potential candidates instantly.</p>
</div>

<div className="feature-card">
  <div className="card-title">
    <span className="icon"><FaUserCheck /></span>
    <h3>View Candidate</h3>
  </div>
  <p>Browse through candidate profiles to find the perfect intern for your organization.</p>
</div>

<div className="feature-card">
  <div className="card-title">
    <span className="icon"><FaBullhorn /></span>
    <h3>Promote Brand</h3>
  </div>
  <p>Highlight your company's culture and attract top student talent with your brand story.</p>
</div>

        </div>
      </section>
      <footer className="getstart-footer">
  <div className="getstart-footer-container">
    <div className="getstart-footer-left">
      <h3>InternQuest</h3>
      <p>Your gateway to career-building internships. Empowering students and companies.</p>
    </div>
    <div className="getstart-footer-right">
      <h4>Contact Us</h4>
      <p><a href="mailto:someone@example.com" style={{color:"white",textDecoration:"none"}}>Email: support@internquest.com</a></p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Career Ave, Silicon Valley, CA</p>
    </div>
  </div>
  <div className="getstart-footer-bottom">
    <p>© 2025 InternQuest. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default InternshipLandingPage;
