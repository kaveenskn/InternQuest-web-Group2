import React from "react";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";
 import Empslider from "./EmpSlider";

const EmHero = () => {
  return (
    <div className="em-hero">
      <div className="em-hero-content">
        <div className="em-hero-text">
          <h2 className="em-topic-text">Explore Our Services</h2>
          <p className="em-hero-description">
            Discover our innovative services designed to support your goals with
            expert guidance, smart solutions and personalized customer care.
          </p>
          <div className="em-button-group">
            <div className="em-hero-explore1">
              <p>Get Started</p>
            </div>
            <div className="em-hero-explore2">
              <p>Learn More</p>
            </div>
          </div>
        </div>

        <div className="em-hero-slider">
           <Empslider /> 
          <div className="em-slider-placeholder">Slider Content</div>
        </div>
      </div>
    </div>
  );
};

export default EmHero;