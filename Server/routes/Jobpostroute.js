const express = require("express");
const router = express.Router();
const { postJob } = require("../controller/Jobpostcontrol.js");
const authenticate = require("../middleware/auth.js");

router.post("/postjob", authenticate, postJob);

module.exports = router;
