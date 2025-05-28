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
];
  

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-500 pb-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-white">
        <div className="mb-4">
          {/* Icon */}
          <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="4" fill="none" />
            <path d="M9 9h6v6H9z" fill="none" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Job Opportunities</h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Discover amazing career opportunities and find your next dream job
        </p>
        <div className="flex flex-wrap gap-6 text-base justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="material-icons">groups</span> 4 Active Positions
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons">schedule</span> Updated Daily
          </div>
          <div className="flex items-center gap-2">
            <span className="material-icons">location_on</span> Remote & On-site
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
