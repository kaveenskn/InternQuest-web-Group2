const mongoose = require("mongoose");

const shortlistSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  shortlistedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Shortlist", shortlistSchema);
