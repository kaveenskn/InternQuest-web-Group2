const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/student.js");
const User = require("../models/User.js");
const Skill = require("../models/Skill.js");
const Project = require("../models/Project.js");
const authenticate = require("../middleware/auth.js"); // Middleware to extract req.user

// Helper to validate ObjectId array
const validateObjectIdArray = (array) => {
  return (
    Array.isArray(array) &&
    array.every((id) => mongoose.Types.ObjectId.isValid(id))
  );
};

// GET /api/students/profile
router.get("/profile", authenticate, async (req, res) => {
  try {
    const email = req.user.email;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const student = await Student.findOne({ user: user._id })
      .populate("user", "email")
      .populate("projects");

    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT /api/students/profile
router.put("/profile", authenticate, async (req, res) => {
  try {
    const email = req.user.email;
    const {
      fullname,
      universityName,
      universityLocation,
      course_of_study,
      phone,
      github_link,
      skills,
      projects,
    } = req.body;

    console.log("Received github_link:", github_link);

    // Find the user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only update fullname if non-empty string is provided
    if (fullname !== undefined && fullname.trim() !== "") {
      user.fullname = fullname.trim();
      await user.save();
    }

    // Find or create student profile
    let student = await Student.findOne({ user: user._id });
    if (!student) {
      student = new Student({ user: user._id });
    }

    // Preserve existing values if not provided or empty
    student.universityName =
      universityName && universityName.trim() !== ""
        ? universityName.trim()
        : student.universityName;

    student.universityLocation =
      universityLocation && universityLocation.trim() !== ""
        ? universityLocation.trim()
        : student.universityLocation;

    student.course_of_study =
      course_of_study && course_of_study.trim() !== ""
        ? course_of_study.trim()
        : student.course_of_study;

    student.phone = phone && phone.trim() !== "" ? phone.trim() : student.phone;

    student.github_link =
      github_link && github_link.trim() !== ""
        ? github_link.trim()
        : student.github_link;

    // Skills and projects update (only if valid)
    if (Array.isArray(skills)) {
      student.skills = skills.map((skill) => skill.trim()).filter(Boolean);
    }

    if (Array.isArray(projects)) {
      const savedProjectIds = [];

      for (const proj of projects) {
        if (proj._id && mongoose.Types.ObjectId.isValid(proj._id)) {
          // Existing project
          savedProjectIds.push(proj._id);
        } else if (
          proj.title &&
          proj.description &&
          proj.tech_stack &&
          proj.link
        ) {
          // New project from frontend
          const newProject = new Project({
            title: proj.title.trim(),
            description: proj.description.trim(),
            tech_stack: proj.tech_stack.trim(),
            link: proj.link.trim(),
            student: student._id,
          });

          const savedProject = await newProject.save();
          savedProjectIds.push(savedProject._id);
        }
      }

      student.projects = savedProjectIds;
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
