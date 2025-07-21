const Application = require("../models/application");
const Student = require("../models/student");
const Job = require("../models/Jobpost");
const Employee = require("../models/employee");
const getEmployeeApplications = async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });

    if (!employee) {
      return res.status(404).json({ message: "Employee profile not found" });
    }

    // Find applications for jobs posted by this employee
    const applications = await Application.find({ employee: employee._id })
      .populate({
        path: "student",
        select: "fullname universityName", // 👈 Add fields here
        populate: { path: "user", select: "email" },
      })
      .populate({
        path: "job",
        select: "title",
      });

    res.status(200).json(applications);
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getEmployeeApplications };
