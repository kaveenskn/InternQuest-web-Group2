import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = ({
  brand = "InternQuest",
  icon = "👤",
  links = [],
  onLinkClick = () => {},
  activeKey = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <li key={link.key}>
            <button
              className={`nav-link ${link.key === activeKey ? "active" : ""}`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLinkClick(link.key);
              }}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button
            className="logout"
            onClick={() => {
              setIsMobileMenuOpen(false); // <-- Close mobile menu here
              onLinkClick("logout");
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
