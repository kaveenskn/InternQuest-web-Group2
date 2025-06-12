import React from "react";
import Card from "./card";
import { FaUserPlus, FaFilter, FaUsers, FaClipboardList } from "react-icons/fa";


const employeeFeatures = [
  {
    icon: <FaUserPlus size={30} />,
    title: "Post Job Openings",
    description: "Easily post internship or job openings and attract quality candidates.",
    highlighted: true,
  },
  {
    icon: <FaFilter size={30} />,
    title: "Filter Candidates",
    description: "Use smart filters to shortlist the most relevant candidates based on skills and experience.",
    highlighted: false,
  },
  {
    icon: <FaUsers size={30} />,
    title: "Candidate Management",
    description: "Track applicants, manage interviews, and monitor application progress.",
    highlighted: false,
  },
  {
    icon: <FaClipboardList size={30} />,
    title: "Review Applications",
    description: "Easily view detailed profiles, resumes, and match scores of all applicants.",
    highlighted: false,
  },
];

const EmployeePageCards = () => {
  return (
    <div style={{marginTop:"-10px",padding:"40px 20px"}} className="cards-section">
      
     <h2 style={{ textAlign: "center",color:"black" }}>
  Streamline Your  <strong>Hiring Process</strong>
</h2>

      <div className="card-container">
        {employeeFeatures.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      
    </div>
  );
};

export default EmployeePageCards;
