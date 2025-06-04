const Job = require("../models/Jobpost");
const Employee = require("../models/employee");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .sort({ createdAt: -1 }) // latest jobs first
      .populate({
        path: "employee",
        select: "companyName", // Only get company name
      });

    // Format response for frontend
    const formattedJobs = jobs.map((job) => ({
      id: job._id,
      title: job.title,
      location: job.location,
      jobType: job.jobType,
      description: job.description,
      deadline: job.deadline,
      companyName: job.employee?.companyName || "Unknown Company",
    }));

    res.json(formattedJobs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch job posts" });
  }
};

module.exports = { getAllJobs };
