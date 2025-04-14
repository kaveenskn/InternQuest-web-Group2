import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="icon">👤</span> InternQuest
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#" className="active">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Find Jobs</a>
        </li>
        <li>
          <a href="#">My CV</a>
        </li>
        <li>
          <a href="#" className="logout">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
