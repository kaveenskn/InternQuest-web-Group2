import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";

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

const Navbar = () => (
  <nav className="w-full bg-white shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 rounded-lg p-1">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" fill="#fff"/>
            <rect width="20" height="20" x="2" y="2" rx="5" stroke="#2563eb" strokeWidth="2"/>
            <rect width="10" height="4" x="7" y="10" rx="2" fill="#2563eb"/>
          </svg>
        </div>
        <span className="text-2xl font-bold text-blue-700 tracking-tight">InternMatch</span>
      </div>
      <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
        <li><a href="/" className="hover:text-blue-700">Home</a></li>
        <li><a href="/internships" className="text-blue-700 font-semibold">Find Internships</a></li>
        <li><a href="/about" className="hover:text-blue-700">About</a></li>
        <li><a href="/contact" className="hover:text-blue-700">Contact</a></li>
      </ul>
      <div className="flex gap-2">
        <button className="px-4 py-1.5 rounded font-semibold border border-blue-600 text-blue-700 hover:bg-blue-50">Sign In</button>
        <button className="px-4 py-1.5 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700">Sign Up</button>
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
    <div
      className="min-h-screen bg-gradient-to-tr from-[#2238A4] via-[#224497] to-[#3494e6] pb-10"
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="pt-12 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2 drop-shadow">
            Find Your Perfect Internship
          </h1>
          <p className="text-center text-white/90 mb-6 text-lg font-medium drop-shadow">
            Browse through our curated list of internship opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow border p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search internships by title or keyword"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col flex-1 min-w-[170px]">
              <label className="text-gray-900 font-semibold mb-1 flex items-center gap-1">
                <FaMapMarkerAlt className="inline text-gray-900" /> Location
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-300"
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
              <label className="text-gray-900 font-semibold mb-1 flex items-center gap-1">
                <HiOutlineBriefcase className="inline text-gray-900" /> Job Type
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-300"
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
              <label className="text-gray-900 font-semibold mb-1 flex items-center gap-1">
                <FaBuilding className="inline text-gray-900" /> Company
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-gray-800 focus:ring-2 focus:ring-blue-300"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="">Select company</option>
                {companies.map((comp) => (
                  <option key={comp} value={comp}>{comp}</option>
                ))}
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition mt-4 md:mt-6 shadow-md">
              Search Internships
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="text-gray-700 font-semibold mb-4">
          {filtered.length} results found
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((i) => (
            <div
              key={i.id}
              className="flex flex-1 min-w-[340px] bg-white border border-gray-200 rounded-xl shadow p-5 gap-4"
            >
              <img
                src={i.logo}
                alt={i.company}
                className="w-12 h-12 object-contain rounded-lg bg-gray-100"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-blue-900 text-lg hover:underline cursor-pointer">
                    {i.title}
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded ml-2">
                    {i.type}
                  </span>
                </div>
                <div className="text-gray-800 text-sm font-medium">{i.company}</div>
                <div className="text-gray-600 text-xs flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="inline text-blue-700" /> {i.location}
                  <span>•</span>
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
