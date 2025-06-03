const Job = require("../models/Jobpost.js");
const Employee = require("../models/employee.js");

const postJob = async (req, res) => {
  try {
    const { title, location, jobType, description, deadline } = req.body;

    if (req.user.role !== "employee") {
      return res
        .status(403)
        .json({ message: "Access denied. Only employees can post jobs." });
    }

    // Find employee by email from token
    const employee = await Employee.findOne({ email: req.user.email });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const newJob = new Job({
      employee: employee._id,
      title,
      location,
      jobType,
      description,
      deadline,
    });

    if (!title || !location || !jobType || !description || !deadline) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await newJob.save();

    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { postJob };
