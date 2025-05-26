// models/Job.js
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  title: { type: String, required: true },
  location: { type: String, required: true },
  jobType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Internship", "Contract"],
    required: true,
  },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
