const Job = require("../models/Jobpost");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("employee", "companyName fullname"); // Populate company name and optionally fullname

    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllJobs };
