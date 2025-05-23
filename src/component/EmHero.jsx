import React from "react";
import employee from "../assets/employee.png";
import company from "../assets/company.png";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";

const EmHero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h2>Explore Our Services</h2>
          <p className="hero-description">
            Discover innovative solutions designed to elevate your business with
            cutting-edge technology.
          </p>
        </div>
        <div className="button-group">
          <div className="hero-explore1">
            <p>Write to Us</p>
            <img src={arrow} alt="" className="style-arrow" />
          </div>
          <div className="hero-explore2">
            <p>Read More</p>
            <img src={arrow} alt="" className="style-arrow" />
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={employee} alt="Employee" className="styled-image1" />
        <img src={company} alt="Company" className="styled-image2" />
      </div>
    </div>
  );
};

export default EmHero;
