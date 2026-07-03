// cleanup-and-seed.js - Run with: node cleanup-and-seed.js
require("dotenv").config();
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Student = require("./models/student");
const Employee = require("./models/employee");

const accounts = [
  {
    email: "heshanishehana123@gmail.com",
    password: "Heshani2001",
    role: "student",
    fullname: "Heshani Shehana",
    universityName: "University of Colombo",
    universityLocation: "Colombo",
  },
  {
    email: "chandima0406sajith@gmail.com",
    password: "chandima0406",
    role: "employee",
    fullname: "Chandima Sajith",
    companyName: "ABC Company",
    companyLocation: "Colombo",
  },
];

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected!\n");

    for (const acc of accounts) {
      console.log("Processing: " + acc.email);
      const existing = await User.findOne({ email: acc.email });
      if (existing) {
        await Student.deleteMany({ user: existing._id });
        await Employee.deleteMany({ user: existing._id });
        await User.deleteOne({ _id: existing._id });
        console.log("  Deleted old records for " + acc.email);
      } else {
        console.log("  No existing record for " + acc.email);
      }

      const hashedPassword = await bcrypt.hash(acc.password, 10);
      const newUser = await new User({ email: acc.email, password: hashedPassword, role: acc.role }).save();

      if (acc.role === "student") {
        await new Student({ user: newUser._id, fullname: acc.fullname, universityName: acc.universityName, universityLocation: acc.universityLocation }).save();
        console.log("  Created Student: " + acc.email);
      } else {
        await new Employee({ user: newUser._id, fullname: acc.fullname, companyName: acc.companyName, companyLocation: acc.companyLocation }).save();
        console.log("  Created Employee: " + acc.email);
      }
    }

    console.log("\nAll done! Both accounts are ready to log in.");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

run();
