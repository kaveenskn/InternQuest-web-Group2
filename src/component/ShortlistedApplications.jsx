import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/shortListed.css";

const RecentApplications = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const fetchApplications = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No authorization token found, please login.");
      return;
    }
    try {
      
      const response = await fetch("http://localhost:5000/api/shortlist/recent", {
         method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({})
      });
      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }

      const data = await response.json();
      console.log("Fetched applications:", data); // Debug
      setApplications(data);
    } catch (error) {
      alert("Failed to fetch applications");
      console.error(error);
    }
  };
  fetchApplications();
}, []);


    const handleViewProfile = (email) => {
    navigate(`/student-profile/${encodeURIComponent(email)}`);
  };

  return (
    <div className="container">
      <h2>Recent Applications</h2>
      <div className="cardWrapper">
        {applications.map((app) => (
          <div key={app.id} className="applicationCard">
            <div>
              <div className="name">{app.fullname}</div>
              <div className="details">
                Applied for <strong>{app.title}</strong> ·{" "}
                {new Date(app.shortlistedAt).toLocaleDateString()}
              </div>
            </div>

            <div className="buttonGroup">
              <button
                className="viewButton"
                onClick={() => {handleViewProfile(app.email)}}
              >
                View Profile
              </button>
              <button
                className="contactButton"
                onClick={() => alert(`Contact: ${app.email}`)}
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;
