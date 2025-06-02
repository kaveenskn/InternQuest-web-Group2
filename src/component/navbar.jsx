import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ brand = "InternQuest", icon = "👤", links = [] }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="icon">{icon}</span> {brand}
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? "×" : "☰"}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
