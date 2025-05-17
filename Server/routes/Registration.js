const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Student = require("../models/student.js");

const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const {
    full_name,
    email,
    password,
    role,
    university_name,
    location,
    course_of_study,
    company_name,
    position,
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      full_name,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();

    // Save role-specific data
    if (role === "student") {
      const newStudent = new Student({
        user: savedUser._id,
        university_name,
        location,
        course_of_study,
      });
      await newStudent.save();
    } else if (role === "employee") {
      //   const newEmployee = new Employee({
      //     user: savedUser._id,
      //     company_name,
      //     position,
      //   });
      //   await newEmployee.save();
      console.log("saved to employee");
    }

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
});

module.exports = router;
