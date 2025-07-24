import React from "react";
import "../../styles/hero.css";
import ImageSlider from "./ImageSlider";

const HeroSection = ({ onGetStarted }) => {
  return (
    <section className="hero-section">
      <div className="hero-text">
              <h1>
          We Build <br /> <strong>Futures for Students</strong>
        </h1>
        <p className="hero-descriptions">
          At InternQuest, we help students find the right internships, build valuable skills, and move closer to their dream careers with the support they need.
        </p>

        <div className="button-group">
          <button className="cta-btn primary" onClick={onGetStarted}>
            Get Started
          </button>
          <button className="cta-btn secondary">Learn More</button>
          
        </div>
      </div>
     <div className="stdhome-banner">
      <h2 className="stdhome-banner-title">
        Empowering Futures with Exceptional <br />
        Internship Opportunities...
      </h2>
      <p className="stdhome-banner-subtitle">Start your journey with us today</p>
    </div>

      <div className="hero-slider">
        <ImageSlider />
      </div>
    </section>
  );
};

export default HeroSection;
