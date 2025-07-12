const Job = require("../models/Jobpost");
const Employee = require("../models/employee");

const getJobsByLoggedInEmployee = async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ Step 1: Find the employee linked to this user
    const employee = await Employee.findOne({ user: userId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // ✅ Step 2: Use the employee's _id to fetch their job posts
    const jobs = await Job.find({ employee: employee._id })
      .sort({ createdAt: -1 })
      .populate({
        path: "employee",
        select: "companyName",
      });

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
    console.error("Error in fetching job board:", err);
    res.status(500).json({ message: "Failed to fetch job posts" });
  }
};

module.exports = { getJobsByLoggedInEmployee };
