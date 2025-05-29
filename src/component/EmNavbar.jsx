import React from "react";
import "../styles/emDashboard.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="InternQuest Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Post Job</li>
        <li>View Profile</li>
        <li>About Us</li>
      </ul>
      <button className="btn">Log Out</button>
    </div>
  );
};

export default Navbar;
