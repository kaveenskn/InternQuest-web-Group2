const express = require("express");
const router = express.Router();
const { applyToJob } = require("../controller/Applicationcontrol");
const authenticate = require("../middleware/auth");

router.post("/apply", authenticate, applyToJob); // Protected route

module.exports = router;
