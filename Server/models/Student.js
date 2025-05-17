const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  universityName: { type: String, required: true },
  universityLocation: { type: String },
  github_link: { type: String },
  phone: { type: String }, // ✅ added phone field
  course_of_study: { type: String, required: true },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

module.exports = mongoose.model("Student", StudentSchema);
