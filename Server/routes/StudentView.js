const express = require("express");
const router = express.Router();
const {
  getStudentProfileByEmail,
} = require("../controller/Studentviewcontrol.js");
const authenticate = require("../middleware/auth.js");

// GET /api/students/profile/:email
router.get("/profile/:email", authenticate, getStudentProfileByEmail);

module.exports = router;
