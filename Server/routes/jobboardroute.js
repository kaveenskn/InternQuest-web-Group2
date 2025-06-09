const express = require("express");
const router = express.Router();
const { getJobsByLoggedInEmployee } = require("../controller/jobboardcontrol");
const authenticate = require("../middleware/auth");

router.get("/jobs", authenticate, getJobsByLoggedInEmployee); // Protected route

module.exports = router;
