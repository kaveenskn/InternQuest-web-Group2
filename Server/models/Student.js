const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    universityName: { type: String, required: true },
    universityLocation: { type: String },
    github_link: { type: String },
    phone: {
      type: String,
      match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"],
    },
    course_of_study: { type: String },
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        default: [],
      },
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
