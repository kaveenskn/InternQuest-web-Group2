const Student = require("../models/Student.js");

// GET /api/students/profile
const getStudentProfile = async (req, res) => {
  try {
    const email = req.user.email; // Extracted from token
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /api/students/profile
const updateStudentProfile = async (req, res) => {
  try {
    const email = req.user.email;
    const updates = req.body;

    const updatedStudent = await Student.findOneAndUpdate(
      { email },
      updates,
      { new: true, upsert: true } // Create if not exists
    );

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getStudentProfile,
  updateStudentProfile,
};
