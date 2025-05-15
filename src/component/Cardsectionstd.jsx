// CardsSection.js
import React from "react";
import Card from "./card";
import { FaCrown, FaChartBar, FaBullhorn, FaFileAlt } from "react-icons/fa";


const CardsSection = () => {
  const cardData = [
    {
      icon: <FaCrown size={30} />,
      title: "SEO/SEM",
      description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue.",
      highlighted: false,
    },
    {
      icon: <FaChartBar size={30} />,
      title: "Marketing",
      description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue.",
      highlighted: false,
    },
    {
      icon: <FaBullhorn size={30} />,
      title: "Viral Campaign",
      description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue.",
      highlighted: true,
    },
    {
      icon: <FaFileAlt size={30} />,
      title: "Others",
      description: "Nullam ac urna eu felis dapibus condimentum sit amet a augue.",
      highlighted: false,
    },
  ];

  return (
    <div>
      
        
      <h2 style={{ textAlign: "center" }}>
        We Provide the <strong>Best Services</strong>
      </h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      
    </div>
  );
};

export default CardsSection;
