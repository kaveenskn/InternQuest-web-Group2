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
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs/find");
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setInternships(sorted);
        setFiltered(sorted);
      } catch (err) {
        console.error("Failed to fetch internships", err);
        alert("Error fetching internships.");
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredData = internships.filter((i) =>
      (location ? i.location === location : true) &&
      (jobType ? i.jobType === jobType : true) &&
      (jobTitle ? i.title === jobTitle : true)
    );
    setFiltered(filteredData);
    setShowAll(false);
  };

  const handleApply = async (jobId, employeeId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:5000/api/applications/apply',
        { jobId, employeeId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message || "Application submitted!");
    } catch (error) {
      console.error("Apply error:", error);
      alert(error.res?.data?.message || "Application failed. Try again.");
    }
  };

  const displayedInternships = showAll ? filtered : filtered.slice(0, 6);

  const locations = [ 'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Moneragala', 'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya' ];
  const jobTypes = ['Onsite', 'Remote', 'Hybrid'];
  const jobTitles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Project Manager', 'Data Analyst', 'QA Tester', 'DevOps Engineer'];

  return (
    <div className="intern-page">
      <main className="intern-main">
        <div className="intern-header">
          <h1>Find Your Perfect Internship</h1>
          <p className="intern-subtitle">
            Browse through our curated list of internship opportunities
          </p>
        </div>

        {/* Filters */}
        <div className="intern-search-card"> 
          <div className="filter-row">
            <div className="filter-col">
              <label className="filter-label">
                <FaMapMarkerAlt className="filter-icon" /> Location
              </label>
              <select className="filter-select" value={location} onChange={(e) => setLocation(e.target.value)}>
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
              <select className="filter-select" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                <option value="">Select job type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="filter-col">
              <label className="filter-label">Job Title</label>
              <select className="filter-select" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
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

                {i.employee?.companyName && (
                  <div className="card-company">
                    <strong>Company:</strong> {i.employee.companyName}
                  </div>
                )}

                <div className="card-meta">
                  <FaMapMarkerAlt className="card-meta-icon" /> {i.location}
                </div>

                <div className="card-deadline">
                  <strong>Deadline:</strong> {new Date(i.deadline).toLocaleDateString()}
                </div>

                <div className={`card-desc ${expandedCard === i._id ? "expanded" : ""}`}>
                  {expandedCard === i._id ? i.description : i.description.slice(0, 120) + (i.description.length > 120 ? "..." : "")}
                </div>

                {i.description.length > 120 && (
                  <span className="read-more-toggle" onClick={() =>
                    setExpandedCard((prev) => (prev === i._id ? null : i._id))
                  }>
                    {expandedCard === i._id ? "Read less" : "Read more"}
                  </span>
                )}

                <button className="view-profile-btn" onClick={() => handleApply(i._id, i.employee?._id)}>
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less */}
        {filtered.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="search-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default InternshipFinderPage;
