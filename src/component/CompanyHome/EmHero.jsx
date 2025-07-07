import React from "react";
import "../../styles/emDashboard.css";
 import EmpImage from "../../assets/Empheropic.jpg";

const EmHero = () => {
  return (
    <div className="em-hero">
      <div className="em-hero-content">
        <div className="em-hero-text">
         <h2 className="em-topic-text">Empowering Your Career Journey</h2>
<p className="em-hero-description">
  At InternQuest, we connect ambitious students with meaningful internship opportunities, offering tailored career guidance, skill-building resources, and expert mentorship to help you thrive in the professional world.
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
          <div className="em-slider-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default EmHero;