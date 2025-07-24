const express = require("express");
const router = express.Router();
const { getMentorByEmail } = require("../controller/Mentorcontroller.js");

router.get("/mentor", getMentorByEmail);

module.exports = router;
