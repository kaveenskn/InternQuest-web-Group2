import React from "react";
import "../pagestyles/InternshipLanding.css"
import { FaSearch, FaUserCheck, FaBullhorn, FaFilter, FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FooterPage from "./Footer";


const InternshipLandingPage = () => {

  const navigate= useNavigate();
  return (
    <div className="landing-page">
      <header className="landing-hero-section">
        <h1>InternQuest!</h1>
        <br />
         <p className="hero-ctn">  
          Discover internship opportunities and post openings to connect students with real-world experience.
         </p>
       
        <div className="auth-buttons">
          <button className="btns sign-in" onClick={()=>{navigate("/login")}}>Sign in</button>
          <button className="btns sign-up" onClick={()=>{navigate("/signup")}}>Sign up</button>
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
<FooterPage/>

    </div>
  );
};

export default InternshipLandingPage;
