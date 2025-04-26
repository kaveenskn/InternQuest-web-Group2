
import React, { useState } from "react";
import "../styles/form1.css";

const Form1 = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div className="container">
        <h1>Ueser Information Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="student">Student</label>
            </div>
            <div>
              <input
                type="radio"
                id="employee"
                name="role"
                value="employee"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="employee">Employee</label>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form1;
