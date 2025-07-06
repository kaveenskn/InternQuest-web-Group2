const express = require("express");
const router = express.Router();
const {
  getRecentShortlists,
} = require("../controller/shortlistfetchcontrol.js");
const authenticate = require("../middleware/auth.js");

router.post("/recent", authenticate, getRecentShortlists);

module.exports = router;
