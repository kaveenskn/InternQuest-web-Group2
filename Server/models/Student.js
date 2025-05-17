// models/Student.js
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  university_name: { type: String, required: true },
  location: { type: String },
  github_link: { type: String },
  linkedin_link: { type: String },
  course_of_study: { type: String, required: true },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

module.exports = mongoose.model("Student", StudentSchema);
