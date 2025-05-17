import React, { useState } from "react";
import "../styles/signin.css";
const signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      username: "",
      password: "",
      rememberMe: false,
    });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-field"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <span className="input-icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="input-icon">🔒</span>
          </div>
          <div className="options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password
            </a>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default signin;
