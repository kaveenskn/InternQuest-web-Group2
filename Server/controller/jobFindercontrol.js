const Job = require("../models/Jobpost");

// @desc   Fetch all job listings
// @route  GET /api/jobs
// @access Public
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).json({ message: "Server error while fetching jobs." });
  }
};

module.exports = { getAllJobs };
