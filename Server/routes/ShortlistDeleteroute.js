const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

// Correctly import the function by destructuring the named export:
const { deleteShortlistedCandidate } = require("../controller/Shortlistdeletecontrol");

// Use it in your delete route
router.delete("/:id", authenticate, deleteShortlistedCandidate);

module.exports = router;
