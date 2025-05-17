const express = require("express");
const app = express();
require("dotenv").config();
const Regroute = require("./routes/Registration.js");

const connectDB = require("./configure/mongo.js");
connectDB();

app.use(express.json());

app.use("/auth", Regroute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
