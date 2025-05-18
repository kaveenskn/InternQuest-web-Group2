const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://InternQuestWeb:Internquestwebproject05@internquest.iydxuh3.mongodb.net/?retryWrites=true&w=majority&appName=InternQuest"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
