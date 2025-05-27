import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ brand = "InternQuest", icon = "👤", links = [] }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="icon">{icon}</span> {brand}
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
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
