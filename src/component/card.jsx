// Card.js
import React from "react";
import "../styles/Card.css";

const Card = ({ icon, title, description, highlighted }) => {
  return (
    <div className={`card ${highlighted ? "highlighted" : ""}`}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#">Read More</a>
    </div>
  );
};

export default Card;
