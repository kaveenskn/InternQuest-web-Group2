import React from "react";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";

const EmHero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
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
