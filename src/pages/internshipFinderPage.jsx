import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import "../styles/internshipFinderPage.css";

const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    type: "Summer Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UX Design Intern",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Fall Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "1 week ago"
  }
];

const locations = ["Mountain View, CA", "Cupertino, CA"];
const jobTypes = ["Summer Internship", "Fall Internship"];
const companies = ["Google", "Apple"];

const Navbar = () => (
  <nav className="intern-navbar">
    <div className="navbar-container">
      <div className="navbar-brand">
        <span className="navbar-logo">InternQuest</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/internships" className="active">Find Internships</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-auth">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </div>
  </nav>
);

const InternshipFinderPage = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [company, setCompany] = useState("");

  const filtered = internships.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) &&
    (location ? i.location === location : true) &&
    (jobType ? i.type === jobType : true) &&
    (company ? i.company === company : true)
  );

  return (
    <div className="intern-page">
      <Navbar />
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
                <FaBuilding className="filter-icon" /> Company
              </label>
              <select
                className="filter-select"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">Select company</option>
                {companies.map((comp) => (
                  <option key={comp} value={comp}>{comp}</option>
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
            <div
              key={i.id}
              className="intern-card"
            >
              <img
                src={i.logo}
                alt={i.company}
                className="card-logo"
              />
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">{i.title}</span>
                  <span className="card-type">{i.type}</span>
                </div>
                <div className="card-company">{i.company}</div>
                <div className="card-meta">
                  <span>
                    <FaMapMarkerAlt className="card-meta-icon" /> {i.location}
                  </span>
                  <span className="dot">•</span>
                  <span>Posted {i.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InternshipFinderPage;
