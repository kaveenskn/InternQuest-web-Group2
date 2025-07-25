import React, { useState } from "react";
import "../../styles/Mentorship.css";
import axios from "axios";


const MentorshipFinder = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [mentor, setMentor] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
  try {

    const res = await axios.get(`http://localhost:5000/api/mentor/mentor?email=${searchEmail}`);
    setMentor(res.data);
    setError("");
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Error: " + (err.response?.data?.message || err.message)); // Debug message
    setMentor(null);
    setError("Mentor not found or server error.");
  }
};


  return (
    <div className="mentorship-page">
      {/* Hero Section */}
      <section className="mentorship-hero">
        <div className="mentorship-hero-left">
          <button className="mentorship-badge">🚀 Where careers begin</button>
          <h1>
            Transform Your Future with{" "}
            <span className="mentorship-highlight">Elite Mentorship</span>
          </h1>
          <p>
            Connect with industry leaders, unlock hidden opportunities, and
            accelerate your career journey with personalized guidance from the
            world's top professionals.
          </p>
          <div className="mentorship-search">
  <input
    type="email"
    placeholder="Enter mentor email..."
    className="mentorship-input"
    value={searchEmail}
    onChange={(e) => setSearchEmail(e.target.value)}
  />
  <button className="mentorship-launch-btn" onClick={handleSearch}>
     Search Mentor
  </button>
</div>

        </div>
        <div className="mentorship-hero-right">
          <div className="mentorship-card-preview">
            <img
              src="https://i.pinimg.com/736x/5f/cb/0a/5fcb0a5578d81bba2917013c511cc247.jpg"
              alt="Sarah Johnson"
              className="mentorship-preview-photo"
            />
            <div className="mentorship-preview-info">
              <h3>Sarah Johnson</h3>
              <p>Senior Engineer @ Google</p>
              <div className="mentorship-rating">⭐ 4.9</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Mentors List */}
      <section className="mentorship-mentors">
        <h2>Meet Your Mentors</h2>
        <p className="mentorship-subtitle">
          Industry leaders ready to guide your journey
        </p>
      <div className="mentorship-card-container">
          {mentor && Array.isArray(mentor.skills) ? (
            <div className="mentorship-card">
              <div className="mentorship-avatar-img">
                <img src={mentor.imageUrl} alt={mentor.name} />
              </div>
              <div className="mentorship-status">
                {mentor.available ? "● Available" : "● Unavailable"}
              </div>
              <h3>{mentor.name}</h3>
              <p className="mentorship-position">{mentor.position}</p>
              <a href="#" className="mentorship-company">{mentor.company}</a>
              <div className="mentorship-rating">
                ⭐ {mentor.rating} <span>({mentor.reviews} reviews)</span>
              </div>
              <div className="mentorship-skills">
                {mentor.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
              <p className="mentorship-location">📍 {mentor.location}</p>
              <div className="mentorship-card-footer">
                <p className="mentorship-price">${mentor.pricePerHour}/hour</p>
                <button
                  className="mentorship-connect-btn"
                  onClick={() => alert("Mentor connection request sent successfully!")}
                >💬 Connect Now</button>
              </div>
            </div>
          ) : error ? (
            <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
          ) : (
            <p style={{ marginTop: "20px" }}>Search for a mentor above to display here.</p>
          )}
</div>

      </section>
    </div>
  );
};

export default MentorshipFinder;
