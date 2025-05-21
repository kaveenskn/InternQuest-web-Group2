import React from "react";
import "../styles/emDashboard.css";
import logo from "../assets/logo.png";

const EmNavbar = () => {
  return (
    <div className="navbar">
      <img cl src={logo} alt="" className="logo" />
      <ul>
        <li>Dashboard</li>
        <li>About Us</li>
        <li>Activity</li>
        <li>Contact</li>
      </ul>

      <div className="btn">
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default EmNavbar;
