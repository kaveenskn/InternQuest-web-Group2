const express = require("express");
const router = express.Router();
const { getAllJobs } = require("../controller/jobFindercontrol.js");
const authenticate = require("../middleware/auth.js");

// GET /api/jobs
router.get("/find", getAllJobs);

module.exports = router;
