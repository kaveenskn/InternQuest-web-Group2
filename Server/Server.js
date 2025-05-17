const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./configure/mongo.js");
connectDB();
// const userRoutes = require("./routes/userRoutes");

app.use(express.json());
// app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
