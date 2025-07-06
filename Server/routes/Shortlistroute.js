const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

const { shortlistApplication } = require("../controller/Shortlstcontrol.js");

// Route to shortlist an application (protected)
router.post("/shortlist", authenticate, shortlistApplication);

module.exports = router;
