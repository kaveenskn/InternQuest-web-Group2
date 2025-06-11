
import React from "react";
import Card from "./card";
import { FaCrown, FaChartBar, FaBullhorn, FaFileAlt } from "react-icons/fa";


const CardsSection = () => {
  const cardData = [
  {
    icon: <FaChartBar size={30} />,
    title: "Smart Job Filtering",
    description: "Find internships that match your skills and interests with our intelligent filters.",
    highlighted: false,
  },
  {
    icon: <FaFileAlt size={30} />,
    title: "Profile Optimization",
    description: "Create a standout profile to get noticed by top recruiters and companies.",
    highlighted: false,
  },
  {
    icon: <FaBullhorn size={30} />,
    title: "Instant Notifications",
    description: "Get real-time updates for new internship postings and application status.",
    highlighted: true,
  },
  {
    icon: <FaCrown size={30} />,
    title: "Top Internships",
    description: "Access exclusive opportunities from leading startups and MNCs.",
    highlighted: false,
  },
];


  return (
    <div style={{marginTop:"80px"}} className="cards-section">
      
     <h2 style={{ textAlign: "center" }}>
  Your Gateway to <strong>Top Internships</strong>
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
