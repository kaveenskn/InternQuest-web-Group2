import React from "react";
import employee from "../assets/employee123.png";
import "../styles/emDashboard.css";
import Empslider from "./EmpSlider";
import EmpImage from "../assets/Empheropic.jpg";

const EmHero = () => {
  return (
    <div className="em-hero">
      <div className="em-hero-content">
        <div className="em-hero-text">
          <h2 className="em-topic-text">Explore Our Services</h2>
          <p className="em-hero-description">
            Explore our wide range of innovative services, carefully designed to
            help you achieve your personal and professional goals. With a strong
            focus on expert guidance, smart and efficient solutions, and a
            commitment to personalized customer care, we are here to support you
            every step of the way ensuring your success through innovation,
            reliability, and excellence.
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
          <img src={EmpImage} alt="image" />
          <div className="em-slider-placeholder">Slider Content</div>
        </div>
      </div>
    </div>
  );
};

export default EmHero;