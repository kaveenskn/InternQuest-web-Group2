import React from "react";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";

const EmHero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="topic-text">Explore Our Services</h2>
        </div>

        <p className="hero-description">
          Explore our wide range of innovative services, carefully designed to
          help you achieve your personal and professional goals. With a strong
          focus on expert guidance, smart and efficient solutions, and a
          commitment to personalized customer care, we are here to support you
          every step of the way ensuring your success through innovation,
          reliability, and excellence.
        </p>
        <div className="button-group">
          <div className="hero-explore1">
            <p>Get Started</p>
          </div>
          <div className="hero-explore2">
            <p>Learn More</p>
          <h2 className="topic-text">Explore Our Services </h2>
          <p className="hero-description">
            Discover our innovative services designed to support your goals with
            expert guidance, smart solutions and personalized customer care.
          </p>
          <div className="button-group">
            <div className="hero-explore1">
              <p>Get Started</p>
          
            </div>
            <div className="hero-explore2">
              <p>Learn More</p>
              
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default EmHero;
