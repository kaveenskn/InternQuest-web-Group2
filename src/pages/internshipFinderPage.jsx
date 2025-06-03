import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import "../styles/internshipFinderPage.css";

const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    location: "Mountain View, CA",
    type: "Summer Internship",
    deadline: "2025-06-15",
    description: "Assist in developing web applications and collaborating with the engineering team.",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UX Design Intern",
    location: "Cupertino, CA",
    type: "Fall Internship",
    deadline: "2025-07-01",
    description: "Work with the design team to create user-friendly interfaces and conduct user research.",
    posted: "1 week ago"
  }
];

const locations = ["Mountain View, CA", "Cupertino, CA"];
const jobTypes = ["Summer Internship", "Fall Internship"];
const jobTitles = [...new Set(internships.map(i => i.title))];

const InternshipFinderPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const filtered = internships.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) &&
    (location ? i.location === location : true) &&
    (jobType ? i.type === jobType : true) &&
    (jobTitle ? i.title === jobTitle : true)
  );

  return (
    <div className="intern-page">
      <main className="intern-main">
        <div className="intern-header">
          <h1>Find Your Perfect Internship</h1>
          <p className="intern-subtitle">
            Browse through our curated list of internship opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="intern-search-card">
          <div className="search-row">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search internships by title or keyword"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
              <label className="filter-label">
                Job Title
              </label>
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
            <button className="search-btn">
              Search Internships
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="results-count">
          {filtered.length} results found
        </div>
        <div className="results-grid">
          {filtered.map((i) => (
            <div key={i.id} className="intern-card">
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">{i.title}</span>
                  <span className="card-type">{i.type}</span>
                </div>
                <div className="card-meta">
                  <FaMapMarkerAlt className="card-meta-icon" /> {i.location}
                </div>
                <div className="card-deadline">
                  <strong>Deadline:</strong> {i.deadline}
                </div>
                <div className="card-desc">
                  {i.description}
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InternshipFinderPage;
