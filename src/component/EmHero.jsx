import React from "react";
import employee from "../assets/employee.png";
import company from "../assets/company.png";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";

const EmHero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Explore Our Services</h2>
          <p className="hero-description">
            Discover our innovative services designed to support your goals with
            expert guidance, smart solutions and personalized customer care.
          </p>
          <div className="button-group">
            <div className="hero-explore1">
              <p>Get Started</p>
              <img src={arrow} alt="arrow" className="style-arrow" />
            </div>
            <div className="hero-explore2">
              <p>Learn More</p>
              <img src={arrow} alt="arrow" className="style-arrow" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={company} alt="Company" className="styled-image2" />
          <img src={employee} alt="Employee" className="styled-image1" />
        </div>
      </div>
    </div>
  );
};

export default EmHero;
