import React from "react";

const jobData = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description:
      "We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for...",
    type: "Full-time",
    salaryType: "Salary",
    applicants: 24,
    posted: "2 days ago",
    salary: "$120,000 - $150,000",
    salaryColor: "text-green-600",
    companyLink: "#",
  },
  {
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    description:
      "Join our growing startup as a Product Manager. You will lead product development initiatives and work closely...",
    type: "Full-time",
    salaryType: "Salary",
    applicants: 18,
    posted: "1 week ago",
    salary: "$100,000 - $130,000",
    salaryColor: "text-green-600",
    companyLink: "#",
  },
  {
    title: "UX/UI Designer",
    company: "Design Studio Pro",
    location: "Austin, TX",
    description:
      "We are seeking a creative UX/UI Designer to create engaging and intuitive user experiences. You will collaborate with...",
    type: "Contract",
    salaryType: "Salary",
    applicants: 31,
    posted: "3 days ago",
    salary: "$80,000 - $100,000",
    salaryColor: "text-green-600",
    companyLink: "#",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pb-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-white">
        <div className="mb-4">
          {/* Bag Icon */}
          <svg className="h-20 w-20 text-white opacity-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="13" rx="4" fill="none" />
            <path d="M8 7V5a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold mb-4 text-center">Job Opportunities</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Discover amazing career opportunities and find your next dream job
        </p>
        <div className="flex flex-wrap gap-8 text-lg justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="material-icons align-middle text-xl">groups</span>
            4 Active Positions
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons align-middle text-xl">schedule</span>
            Updated Daily
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons align-middle text-xl">location_on</span>
            Remote & On-site
          </div>
        </div>
      </section>

      {/* Latest Job Postings */}
      <section className="bg-white rounded-t-3xl shadow-lg p-8 max-w-6xl mx-auto w-full -mt-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Latest Job Postings</h2>
        <p className="text-gray-600 text-center mb-8">
          Browse through our curated list of job opportunities from top companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobData.map((job, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="font-bold text-lg mb-1">{job.title}</h3>
              <a href={job.companyLink} className="text-blue-600 font-semibold mb-1 hover:underline">
                {job.company}
              </a>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span className="material-icons mr-1 text-base">location_on</span>
                {job.location}
              </div>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{job.type}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">{job.salaryType}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span>
                  <span className="material-icons align-middle text-base">groups</span> {job.applicants} applicants
                </span>
                <span>{job.posted}</span>
              </div>
              <div className="mt-2 font-semibold">
                Salary Range: <span className={`font-bold ${job.salaryColor}`}>{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
