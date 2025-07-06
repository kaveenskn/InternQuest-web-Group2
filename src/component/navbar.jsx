import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({
  brand = "InternQuest",
  icon = "❖𝓠 ",
  links = [],
  activeKey = "",
  onLinkClick = (key) => {},
  transparent = false, // 👈 New prop
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (key) => {
    onLinkClick(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`glass-navbar ${transparent ? "navbar-transparent" : "navbar-solid"}`}
    >
      <div className="navbar-brand">
        <span className="icon">{icon}</span>
        <span className="brand-text">{brand}</span>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.key}>
            <button
              className={`nav-link ${link.key === activeKey ? "active" : ""}`}
              onClick={() => handleClick(link.key)}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button className="logout" onClick={() => navigate("/")}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;