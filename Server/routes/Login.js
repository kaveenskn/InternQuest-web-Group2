const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Student = require("../models/student.js");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  const user = User.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  res.status(200).json({
    message: "Login successful!",
    user: {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
    },
  });
});
