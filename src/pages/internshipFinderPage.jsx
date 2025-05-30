import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Mountain View, CA",
    type: "Summer Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "UX Design Intern",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Fall Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "1 week ago",
  },
];

const locations = ["Mountain View, CA", "Cupertino, CA"];
const jobTypes = ["Summer Internship", "Fall Internship"];
const companies = ["Google", "Apple"];

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-2">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-2">
          Find Your Perfect Internship
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Browse through our curated list of internship opportunities
        </p>

        <div className="bg-gray-50 rounded-xl p-4 mb-8 border">
          <div className="flex items-center gap-3 mb-4">
            <FaSearch className="text-gray-400 text-lg ml-2" />
            <input
              type="text"
              placeholder="Search internships by title or keyword"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col flex-1 min-w-[170px]">
              <span className="text-blue-800 font-semibold mb-1">Location</span>
              <select
                className="rounded border border-gray-300 px-3 py-2 bg-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1 min-w-[170px]">
              <span className="text-blue-800 font-semibold mb-1">Job Type</span>
              <select
                className="rounded border border-gray-300 px-3 py-2 bg-white"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">Select job type</option>
                {jobTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1 min-w-[170px]">
              <span className="text-blue-800 font-semibold mb-1">Company</span>
              <select
                className="rounded border border-gray-300 px-3 py-2 bg-white"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">Select company</option>
                {companies.map((comp) => (
                  <option key={comp} value={comp}>{comp}</option>
                ))}
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Search Internships
            </button>
          </div>
        </div>

        <div className="text-center font-semibold mb-6">
          {filtered.length} results found
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {filtered.map((i) => (
            <div
              key={i.id}
              className="flex bg-white border border-gray-200 rounded-xl shadow p-5 min-w-[320px] max-w-[370px] items-start gap-4"
            >
              <img
                src={i.logo}
                alt={i.company}
                className="w-12 h-12 object-contain rounded-lg bg-gray-100"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-blue-700 hover:underline cursor-pointer">
                    {i.title}
                  </span>
                  <span className="bg-gray-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded ml-2">
                    {i.type}
                  </span>
                </div>
                <div className="text-gray-800 text-sm font-medium">{i.company}</div>
                <div className="text-gray-500 text-xs flex items-center gap-2 mt-1">
                  <span>📍 {i.location}</span>
                  <span>•</span>
                  <span>Posted {i.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipFinderPage;
