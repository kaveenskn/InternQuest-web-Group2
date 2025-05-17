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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="container">
      <div className="form-box login">
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

          <label htmlFor="password">Password</label>
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
              <label htmlFor="universityName">University Name</label>
              <input
                type="text"
                placeholder="Enter your university name"
                name="universityName"
                onChange={handleChange}
                required
              />

              <label htmlFor="universityLocation">University Location</label>
              <input
                type="text"
                placeholder="Enter your university location"
                name="universityLocation"
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

              <label htmlFor="companyLocation">Company Location</label>
              <input
                type="text"
                placeholder="Enter your company location"
                name="companyLocation"
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Welcome to InternQuest</h1>
        </div>
      </div>
    </div>
  );
};

export default Form1;
