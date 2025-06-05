import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import axios from "axios";
import "../styles/internshipFinderPage.css";

const InternshipFinderPage = () => {
  const [internships, setInternships] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Fetch internships from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/jobs");
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setInternships(sorted);
        setFiltered(sorted);
      } catch (err) {
        console.error("Failed to fetch internships", err);
      }
    };
    fetchData();
  }, []);

  // Filter based on dropdowns
  const handleSearch = () => {
    const filteredData = internships.filter((i) =>
      (location ? i.location === location : true) &&
      (jobType ? i.jobType === jobType : true) &&
      (jobTitle ? i.title === jobTitle : true)
    );
    setFiltered(filteredData);
    setShowAll(false);
  };

  const displayedInternships = showAll ? filtered : filtered.slice(0, 6);
  const locations = [...new Set(internships.map(i => i.location))];
  const jobTypes = [...new Set(internships.map(i => i.jobType))];
  const jobTitles = [...new Set(internships.map(i => i.title))];

  return (
    <div className="intern-page">
      <main className="intern-main">
        <div className="intern-header">
          <h1>Find Your Perfect Internship</h1>
          <p className="intern-subtitle">
            Browse through our curated list of internship opportunities
          </p>
        </div>

        {/* Filters Only */}
        <div className="intern-search-card">
          <div className="filter-row">
            <div className="filter-col">
              <label className="filter-label">
                <FaMapMarkerAlt className="filter-icon" /> Location
              </label>
              <select
                className="filter-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="filter-col">
              <label className="filter-label">
                <HiOutlineBriefcase className="filter-icon" /> Job Type
              </label>
              <select
                className="filter-select"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Select job type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="filter-col">
              <label className="filter-label">Job Title</label>
              <select
                className="filter-select"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              >
                <option value="">Select job title</option>
                {jobTitles.map((title) => (
                  <option key={title} value={title}>{title}</option>
                ))}
              </select>
            </div>
            <button className="search-btn" onClick={handleSearch}>
              Search Internships
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="results-count">{filtered.length} results found</div>
        <div className="results-grid">
          {displayedInternships.map((i) => (
            <div key={i._id} className="intern-card">
              <div className="card-content">
                <div className="card-title-row">
                  <span className="int-card-title" title={i.title}>{i.title}</span>
                  <span className="int-card-type">{i.jobType}</span>
                </div>
                <div className="card-meta">
                  <FaMapMarkerAlt className="card-meta-icon" /> {i.location}
                </div>
                <div className="card-deadline">
                  <strong>Deadline:</strong> {new Date(i.deadline).toLocaleDateString()}
                </div>
                <div className="card-desc">
                  {i.description}
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && filtered.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="search-btn" onClick={() => setShowAll(true)}>
              View More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default InternshipFinderPage;
