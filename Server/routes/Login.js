const express = require("express");
const router = express.Router();
const { loginUser } = require("../controller/logincontrol.js");

router.post("/login", loginUser);

module.exports = router;
