const express = require("express");
const router = express.Router();
const { deleteJobById } = require("../controller/jobdeletecontrol.js");
const authenticate = require("../middleware/auth");

// Delete a job by ID
router.delete("/jobs/:id", authenticate, deleteJobById);

module.exports = router;
