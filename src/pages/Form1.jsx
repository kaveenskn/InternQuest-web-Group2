import React, { useState } from "react";
import "../styles/form1.css";

const Form1 = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "", // added password field
    role: "",
    University: "",
    Location: "",
    companyName: "",
    position: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="container">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          name="fullname"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label> {/* New password field */}
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
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
            <label htmlFor="schoolName">University</label>
            <input
              type="text"
              placeholder="Enter your University name"
              name="University"
              onChange={handleChange}
              required
            />

            <label htmlFor="schoolLocation">Location</label>
            <input
              type="text"
              placeholder="Enter your University location"
              name="Location"
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
              onChange={handleChange}
              required
            />

            <label htmlFor="position">Position</label>
            <input
              type="text"
              placeholder="Enter your position"
              name="position"
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form1;
