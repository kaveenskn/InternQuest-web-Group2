// models/Project.js
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  tech_stack: { type: String },
  link: { type: String },
});

module.exports = mongoose.model("Project", ProjectSchema);
