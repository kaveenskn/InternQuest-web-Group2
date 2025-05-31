const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const connectDB = require("./configure/mongo.js");
connectDB();

const Regroute = require("./routes/Registration.js");
app.use(express.json());
app.use("/auth", Regroute);

const logroutes = require("./routes/Login.js");
app.use("/authlog", logroutes);

const profileroutes = require("./routes/studentprofile.js");
app.use("/api/students", profileroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
