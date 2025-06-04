const express = require("express");
const router = express.Router();
const { getAllJobs } = require("../controller/jobboardcontrol");
const authenticate = require("../middleware/auth");

router.get("/jobs", authenticate, getAllJobs); // Protected route

module.exports = router;
