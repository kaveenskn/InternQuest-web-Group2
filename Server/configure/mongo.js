const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async (retries = 5, delay = 5000) => {
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not set. Starting without a MongoDB connection.");
    return null;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(`[Attempt ${attempt}/${retries}] MongoDB connection failed: ${error.message}`);

      if (attempt < retries) {
        console.log(`Retrying in ${delay / 1000}s...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error("All MongoDB connection attempts failed. Starting without a MongoDB connection.");
        return null;
      }
    }
  }
};

module.exports = connectDB;