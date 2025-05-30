const express = require("express");
const router = express.Router();
const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/studentController");
const authenticate = require("../middleware/auth");

router.get("/profile", authenticate, getStudentProfile);
router.put("/profile", authenticate, updateStudentProfile);

module.exports = router;
