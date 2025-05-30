const User = require("../models/User.js");
const skills = require("../models/Skill.js");
const projects = require("../models/Project.js");
const Student = require("../models/student.js");

// GET /api/students/profile
const getStudentProfile = async (req, res) => {
  try {
    // 🔧 Hardcoded email for demo/dev mode
    const email = "shankaveen05@gmail.com";

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const student = await Student.findOne({ user: user._id })
      .populate("user")
      .populate("skills")
      .populate("projects");

    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /api/students/profile
const updateStudentProfile = async (req, res) => {
  try {
    // 🔧 Use the same hardcoded email to match the GET logic
    const email = "kevinsmith04@gmail.com";
    const updates = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { user: user._id },
      updates,
      { new: true, upsert: true }
    )
      .populate("user")
      .populate("skills")
      .populate("projects");

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getStudentProfile,
  updateStudentProfile,
};
