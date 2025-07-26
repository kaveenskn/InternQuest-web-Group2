import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "../pagestyles/form1.css";

const SignupForm = () => {
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
        navigate("/login");
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
   const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-right-panel-only">
          <div className="signup-form-container">
            <h1 className="signup-form-heading">Sign Up with InternQuest</h1>
          

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="signup-input-group">
                <label htmlFor="fullname" className="signup-label">Full Name</label>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                  value={value.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-input-group">
                <label htmlFor="email" className="signup-label">Email</label>
                <input
                  className="signup-input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-input-group">
                <label htmlFor="password" className="signup-label">Password</label>
                <input
                  className="signup-input"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={value.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="signup-input-group">
                <label className="signup-label">Select Your Role</label>
                <div className="signup-radio-group">
                  <div className="signup-radio-item">
                    <input
                      className="signup-radio"
                      type="radio"
                      id="student"
                      name="role"
                      value="student"
                      onChange={handleChange}
                    />
                    <label htmlFor="student" className="signup-radio-label">Student</label>
                  </div>
                  <div className="signup-radio-item">
                    <input
                      className="signup-radio"
                      type="radio"
                      id="employee"
                      name="role"
                      value="employee"
                      onChange={handleChange}
                    />
                    <label htmlFor="employee" className="signup-radio-label">Employee</label>
                  </div>
                </div>
              </div>

              {value.role === "student" && (
                <>
                  <div className="signup-input-group">
                    <label htmlFor="universityName" className="signup-label">University Name</label>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter your university name"
                      name="universityName"
                      value={value.universityName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="signup-input-group">
                    <label htmlFor="universityLocation" className="signup-label">University Location</label>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter your university location"
                      name="universityLocation"
                      value={value.universityLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {value.role === "employee" && (
                <>
                  <div className="signup-input-group">
                    <label htmlFor="companyName" className="signup-label">Company Name</label>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter your company name"
                      name="companyName"
                      value={value.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="signup-input-group">
                    <label htmlFor="companyLocation" className="signup-label">Company Location</label>
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Enter your company location"
                      name="companyLocation"
                      value={value.companyLocation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              <button type="submit" className="signup-submit-btn">
                Create Account
              </button>

              <div className="signup-redirect">
                Already have an account? <Link to="/login" className="signup-redirect-link">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
