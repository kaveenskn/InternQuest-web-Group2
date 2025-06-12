const Job = require("../models/Jobpost.js");
const User = require("../models/User.js"); // Use the same model as login
const Employee = require("../models/employee.js");

const postJob = async (req, res) => {
  try {
    const { title, location, jobType, description, deadline } = req.body;

    if (req.user.role !== "employee") {
      return res
        .status(403)
        .json({ message: "Access denied. Only employees can post jobs." });
    }

    const employee = await Employee.findOne({ user: req.user.id });
    if (!employee) {
      return res.status(404).json({ message: "Employee profile not found" });
    }

    if (!title || !location || !jobType || !description || !deadline) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = new Job({
      employee: employee._id,
      title,
      location,
      jobType,
      description,
      deadline,
    });

    await newJob.save();

    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { postJob };
