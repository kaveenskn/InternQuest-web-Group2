const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  skills: [String],
  location: { type: String },
  pricePerHour: { type: Number, default: 0 },
  imageUrl: { type: String },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("mentors", MentorSchema);
