const express = require("express");
const router = express.Router();
const Student = require("../models/student.js");
const User = require("../models/User.js");
// const skills = require("../models/Skill.js"); // you don't seem to use this here
// const projects = require("../models/Project.js"); // same as above

// Middleware to authenticate and set req.user (make sure you have this)
const authenticate = require("../middleware/auth.js"); // example

// GET /api/students/profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const email = req.user.email;

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
});

// PUT /api/students/profile
router.put("/profile", authenticate, async (req, res) => {
  try {
    const email = req.user.email;
    const {
      fullname, // belongs to User model
      universityName,
      universityLocation,
      course_of_study,
      phone,
      github_link,
      skills,
      projects,
    } = req.body;

    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Update fullname in User model
    if (fullname) {
      user.fullname = fullname;
      await user.save();
    }

    // 3. Update or create Student profile
    const updatedStudent = await Student.findOneAndUpdate(
      { user: user._id },
      {
        universityName,
        universityLocation,
        course_of_study,
        phone,
        github_link,
        skills: Array.isArray(skills) ? skills : [],
        projects: Array.isArray(projects) ? projects : [],
      },
      { new: true, upsert: true }
    );

    // 4. Respond with updated profile
    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        fullname: user.fullname,
        email: user.email,
      },
      ...updatedStudent._doc,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
