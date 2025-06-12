const Application = require("../models/application");
const Student = require("../models/student");
const Job = require("../models/Jobpost");

const applyToJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const userId = req.user.id;
    const Role = req.user.role;

    if (Role !== "student") {
      return res
        .status(403)
        .json({ message: "Only students can apply for jobs." });
    }

    const student = await Student.findOne({ user: userId }).populate("user");
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if already applied
    const existingApp = await Application.findOne({
      student: student._id,
      job: job._id,
    });
    if (existingApp) {
      return res
        .status(400)
        .json({ message: "You have already applied for this job." });
    }

    const newApp = new Application({
      student: student._id,
      job: job._id,
      employee: job.employee, // get employee from job document
      fullName: student.fullname,
      universityName: student.universityName,
      email: student.user.email,
    });

    await newApp.save();

    return res
      .status(201)
      .json({ message: "Applied successfully", application: newApp });
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { applyToJob };
