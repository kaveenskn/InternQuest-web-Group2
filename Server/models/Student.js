const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    universityName: { type: String, required: true, trim: true },
    universityLocation: { type: String, trim: true },
    github_link: { type: String, trim: true },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"],
    },
    course_of_study: { type: String, trim: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
