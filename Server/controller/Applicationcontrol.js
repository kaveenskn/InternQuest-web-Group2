const Application = require("../models/application");
const Student = require("../models/student");
const Job = require("../models/Jobpost");

const applyToJob = async (req, res) => {
  try {
    const { jobId, employeeId } = req.body;
    const userId = req.user.id;
    const Role = req.user.role; // assuming middleware added user to req

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

    const newApp = new Application({
      student: student._id,
      job: job._id,
      employee: employeeId,
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
