import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";  // Import toast
import "react-toastify/dist/ReactToastify.css";
import "../styles/navbar.css";

const Navbar = ({
  brand = "InternQuest",
  icon = "𝓘𝓠 ",
  links = [],
  activeKey = "",
  onLinkClick = (key) => {},
  transparent = false,
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

  // New function to confirm logout
  const confirmLogout = () => {
  toast.warn(
    <div style={{ color: "#ffffffff", fontWeight: "600" }}>
      Are you sure you want to logout? <br />
      <button
        onClick={() => {
          toast.dismiss();
          navigate("/");
        }}
        style={{
          marginRight: "10px",
          padding: "6px 14px",
          backgroundColor: "#FF6F3C",  // Orange button
          color: "#FFFFFF",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Yes
      </button>
      <button
        onClick={() => toast.dismiss()}
        style={{
          padding: "6px 14px",
          backgroundColor: "#0D1B2A",  // Dark blue button
          color: "#f17041ff",  // Orange text
          border: "1px solid #FF6F3C",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        No
      </button>
    </div>,
    {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
      style: {
        backgroundColor: "#001761ff", // light bluish background for toast box
        borderRadius: "8px",
        border: "2px solid #0D1B2A", // dark blue border
        boxShadow: "0 2px 8px rgba(13, 27, 42, 0.5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      },
    }
  );
};

  return (
    <>
      <nav
        className={`glass-navbar ${
          transparent ? "navbar-transparent" : "navbar-solid"
        }`}
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
            {/* Use confirmLogout instead of direct navigate */}
            <button className="logout" onClick={confirmLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <ToastContainer />
    </>
  );
};

export default Navbar;
