const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    fullname: { type: String, required: true },
    universityName: { type: String, trim: true },
    universityLocation: { type: String, trim: true },
    github_link: { type: String },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"],
    },
    course_of_study: { type: String, trim: true },
    skills: [{ type: String, trim: true }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
