import React, { useState } from 'react';
import './InternshipFinder.css';

const internships = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'Summer Internship',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    posted: '2 days ago'
  },

  {
    id: 2,
    title: 'UX Design Intern',
    company: 'Apple',
    location: 'Cupertino, CA',
    type: 'Fall Internship',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    posted: '1 week ago'
  },

  // Can add more internships as needed

];

export default function InternshipFinder() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [company, setCompany] = useState('');

  const filtered = internships.filter(i =>
    i.title.toLowerCase().includes(search.toLowerCase()) &&
    (location ? i.location === location : true) &&
    (jobType ? i.type === jobType : true) &&
    (company ? i.company === company : true)
  );

  return (
    <div className="if-main">
      <div className="if-header">
        <h1>Find Your Perfect Internship</h1>
        <div className="if-subtitle">
          Browse through our curated list of internship opportunities
        </div>
      </div>

      <div className="if-search-card"> 
        <div className="if-search-row">
          <span className="if-search-icon">🔍</span>

          <input
            className="if-search-input"
            type="text"
            placeholder="Search internships by title or keyword"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="if-filter-row">
          <div className="if-filter">
            <span className="if-filter-label">📍 Location</span>

            <select value={location} onChange={e => setLocation(e.target.value)}>
              <option value="">Select location</option>
              <option value="Mountain View, CA">Mountain View, CA</option>
              <option value="Cupertino, CA">Cupertino, CA</option>
            </select>

          </div>

          <div className="if-filter">
            <span className="if-filter-label">🏢 Job Type</span>

            <select value={jobType} onChange={e => setJobType(e.target.value)}>
              <option value="">Select job type</option>
              <option value="Summer Internship">Summer Internship</option>
              <option value="Fall Internship">Fall Internship</option>
            </select>

          </div>

          <div className="if-filter">
            <span className="if-filter-label">🏬 Company</span>

            <select value={company} onChange={e => setCompany(e.target.value)}>
              <option value="">Select company</option>
              <option value="Google">Google</option>
              <option value="Apple">Apple</option>
            </select>

          </div>

          <button className="if-search-btn">Search Internships</button>
        </div>
      </div>

      <div className="if-results">
        <b>{filtered.length} results found</b>
      </div>
      
      <div className="if-card-list">
        {filtered.map(i => (
          <div key={i.id} className="if-card">
            <img src={i.logo} alt={i.company} className="if-card-logo" />
            <div className="if-card-content">
              <div className="if-card-title-row">
                <span className="if-card-title">{i.title}</span>
                <span className="if-card-type">{i.type}</span>
              </div>

              <div className="if-card-company">{i.company}</div>
              
              <div className="if-card-meta">
                <span>📍 {i.location}</span>
                <span className="if-dot">•</span>
                <span>Posted {i.posted}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
