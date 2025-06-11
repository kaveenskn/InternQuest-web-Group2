const express = require("express");
const router = express.Router();
const {
  getEmployeeApplications,
} = require("../controller/Applicationfetchcontrol.js");
const authenticate = require("../middleware/auth");

router.get("/employee-applications", authenticate, getEmployeeApplications);

module.exports = router;
