const express = require("express");
const router = express.Router();
const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controller/studentprofilecontrol");

router.get("/profile", getStudentProfile);
router.put("/profile", updateStudentProfile);

module.exports = router;
