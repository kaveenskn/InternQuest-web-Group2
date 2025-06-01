import React, { useState } from "react";
import "../styles/form1.css";

const Form1 = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    universityName: "",
    universityLocation: "",
    companyName: "",
    companyLocation: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/signup", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        console.log(data);
        setValue({
          fullname: "",
          email: "",
          password: "",
          role: "",
          universityName: "",
          universityLocation: "",
          companyName: "",
          companyLocation: "",
        });
      } else {
        alert(`Error: ${data.message}`);
        console.error(data);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong while registering the user.");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="left-panel">
        <h2>Welcome to InternQuest</h2>
      </div>
      <div className="right-panel">
        <h1>Signup With InternQuest</h1>
        <form >
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            value={value.fullname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={value.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={value.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Select Your Role</label>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="student"
                name="role"
                value="student"
                checked={value.role === "student"}
                onChange={handleChange}
              />
              <label htmlFor="student">Student</label>
            </div>
            <div>
              <input
                type="radio"
                id="employee"
                name="role"
                value="employee"
                checked={value.role === "employee"}
                onChange={handleChange}
              />
              <label htmlFor="employee">Employee</label>
            </div>
          </div>

          {value.role === "student" && (
            <>
              <label htmlFor="universityName">University Name</label>
              <input
                type="text"
                placeholder="Enter your university name"
                name="universityName"
                value={value.universityName}
                onChange={handleChange}
                required
              />

              <label htmlFor="universityLocation">University Location</label>
              <input
                type="text"
                placeholder="Enter your university location"
                name="universityLocation"
                value={value.universityLocation}
                onChange={handleChange}
                required
              />
            </>
          )}

          {value.role === "employee" && (
            <>
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                name="companyName"
                value={value.companyName}
                onChange={handleChange}
                required
              />

              <label htmlFor="companyLocation">Company Location</label>
              <input
                type="text"
                placeholder="Enter your company location"
                name="companyLocation"
                value={value.companyLocation}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit" onClick={handleSubmit}>Submit</button>
          <div className="register-login-redirect">
            Already have an account? <a href="/login">Sign in</a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Form1;
