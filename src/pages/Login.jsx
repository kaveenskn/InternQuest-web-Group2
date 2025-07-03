import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../pagestyles/Login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/authlog/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const userEmail = data.email;

        localStorage.setItem('token', token);
        localStorage.setItem('email', userEmail);

        if (data.user.role === "student") {
          navigate("/students");
        } else if (data.user.role === "employee") {
          navigate("/employers");
        } else {
          alert("Unknown user role");
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left-panel">
          <div className="login-panel-content">
            <h2 className="login-welcome-title">Welcome Back!</h2>
            <p className="login-welcome-subtitle">
              Sign in to your InternQuest account and continue your journey
            </p>
          </div>
        </div>
        
        <div className="login-right-panel">
          <div className="login-form-container">
            <h1 className="login-form-title">Sign In</h1>
            <p className="login-form-subtitle">Enter your credentials to access your account</p>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-input-group">
                <label htmlFor="email" className="login-label">Email</label>
                <input
                  className="login-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-input-group">
                <label htmlFor="password" className="login-label">Password</label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-forgot-password">
                <a href="#" className="login-forgot-link">Forgot your password?</a>
              </div>

              <button type="submit" className="login-submit-btn">
                Sign In
              </button>
              
              <div className="login-redirect">
                Don't have an account? <Link to="/signup" className="login-redirect-link">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;