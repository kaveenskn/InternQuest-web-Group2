import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const JobPostForm = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #2238A4 0%, #224497 50%, #3494e6 100%)",
      }}
    >
      <form
        className="w-full max-w-md md:max-w-lg bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-10 mx-2 flex flex-col gap-5 border border-white/30"
        style={{
          boxShadow: "0 8px 40px 0 rgba(34,68,151,0.25)",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-1 drop-shadow">
          Create a New Job Posting
        </h2>
        <p className="text-center text-blue-100 mb-4 text-base">
          Fill in the details to post a new job opportunity
        </p>

        {/* Job Title */}
        <div>
          <label className="block text-white font-semibold mb-1">Job Title*</label>
          <select className="w-full rounded-lg border-none bg-white/60 text-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-300 transition">
            <option value="">Select job title</option>
            <option>Software Engineer</option>
            <option>UI/UX Designer</option>
            <option>Product Manager</option>
          </select>
        </div>

        {/* Row: Location & Type */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-white font-semibold mb-1">Job Location*</label>
            <select className="w-full rounded-lg border-none bg-white/60 text-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-300 transition">
              <option value="">Select location</option>
              <option>Remote</option>
              <option>New York</option>
              <option>San Francisco</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-white font-semibold mb-1">Job Type*</label>
            <select className="w-full rounded-lg border-none bg-white/60 text-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-300 transition">
              <option value="">Select job type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-white font-semibold mb-1">Application Deadline*</label>
          <div className="relative">
            <input
              type="date"
              className="w-full rounded-lg border-none bg-white/60 text-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-300 transition pr-10"
              placeholder="mm / dd / yyyy"
            />
            <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-white font-semibold mb-1">Job Description*</label>
          <textarea
            rows={4}
            className="w-full rounded-lg border-none bg-white/60 text-gray-800 px-4 py-2 focus:ring-2 focus:ring-blue-300 transition resize-none"
            placeholder="Describe the job responsibilities, requirements, benefits, etc."
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            type="reset"
            className="flex-1 bg-white/40 text-white font-semibold py-2 rounded-full hover:bg-white/60 transition"
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-500 transition"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
