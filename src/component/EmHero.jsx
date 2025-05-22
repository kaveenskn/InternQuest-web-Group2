import React from "react";
import employee from "../assets/employee.png";
import company from "../assets/company.png";
import arrow from "../assets/arrow.png";
import "../styles/emDashboard.css";

const EmHero = () => {
  return (
    <div className="hero">
      <h1>CREATE SOFTWARE SOLUTIONS</h1>
      <p>Empowering innovation through tailored software systems.</p>
      <div className="hero-container">
        <div className="hero-explore1">
          <p>Write to Us</p>
          <img src={arrow} alt="" className="style-arrow" />
        </div>
        <div className="hero-explore2">
          <p>Read More</p>
          <img src={arrow} alt="" className="style-arrow" />
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
