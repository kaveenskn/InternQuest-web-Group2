const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Student = require("../models/student.js");
const Employee = require("../models/employee.js");

const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  let {
    fullname,
    email,
    password,
    role,
    universityName,
    universityLocation,
    companyName,
    companyLocation,
  } = req.body;

  email = email.toLowerCase();
  companyLocation = companyLocation.toLowerCase();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();

    // Save role-specific data
    if (role === "student") {
      const newStudent = new Student({
        user: savedUser._id,
        universityName,
        universityLocation,
      });
      await newStudent.save();
    } else if (role === "employee") {
      const newEmployee = new Employee({
        user: savedUser._id,
        companyName,
        companyLocation,
      });
      await newEmployee.save();
      console.log("saved to employee");
    }

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
});

module.exports = router;
