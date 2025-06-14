const Student = require("../models/student.js");
const User = require("../models/User.js");
const skills = require("../models/Skill.js");
const projects = require("../models/Project.js");

// GET /api/students/profile/:email
const getStudentProfileByEmail = async (req, res) => {
  try {
    const email = req.params.email;

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

module.exports = {
  getStudentProfileByEmail,
  // ...other exports like updateStudentProfile, etc.
};
