import React from "react";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
 const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="icon">👤</span> InternQuest
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="active">
            Dashboard
          </Link>
        </li>
        <li>
           <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/find-jobs">Find Jobs</Link>
          
        </li>
        <li>
          <Link to="/my-cv">My CV</Link>
        </li>
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
