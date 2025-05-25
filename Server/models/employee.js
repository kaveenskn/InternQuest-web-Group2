// models/Employee.js
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  companyName: { type: String },
  companyLocation: { type: String },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
