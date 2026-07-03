const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Employee = require("../models/employee");

const JWT_SECRET = process.env.JWT_SECRET || "Intern@2553381";

// Middleware to authenticate
const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

// GET /api/employee-profile/me
router.get("/me", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });
    if (!employee) {
      return res.status(404).json({ message: "Employee profile not found" });
    }
    res.json(employee);
  } catch (error) {
    console.error("Error fetching employee profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/employee-profile/me
router.put("/me", authenticate, async (req, res) => {
  try {
    const { fullname, companyName, companyLocation } = req.body;
    const employee = await Employee.findOneAndUpdate(
      { user: req.user.id },
      { fullname, companyName, companyLocation },
      { new: true, runValidators: true }
    );
    if (!employee) {
      return res.status(404).json({ message: "Employee profile not found" });
    }
    res.json(employee);
  } catch (error) {
    console.error("Error updating employee profile:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
