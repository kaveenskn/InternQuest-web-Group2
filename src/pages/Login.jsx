import React, { useState } from "react";
import "../pagestyles/Login.css";

const Login = () => {
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
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log(data);
        // redirect or save token here
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left-panel">
        <h2>Welcome Back!</h2>
      </div>
      <div className="login-right-panel">
        <h1>Login to InternQuest</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          <div className="login-register-redirect">
            Don’t have an account? <a href="/signup">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
