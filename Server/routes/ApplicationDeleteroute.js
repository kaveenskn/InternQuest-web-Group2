const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");

// Correctly import the function by destructuring the named export:
const { ApplicationDelete } = require("../controller/ApplicationDeletecontrol");

// Use it in your delete route
router.post("/:id", authenticate, ApplicationDelete);

module.exports = router;
