const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const connectDB = require("./configure/mongo.js");
connectDB();
app.use(express.json());

const Regroute = require("./routes/Registration.js");

app.use("/auth", Regroute);

const logroutes = require("./routes/Login.js");
app.use("/authlog", logroutes);

const profileroutes = require("./routes/studentprofile.js");
app.use("/api/students", profileroutes);

const jobpostroutes = require("./routes/Jobpostroute.js");
app.use("/api/employers", jobpostroutes);

const jobboardroutes = require("./routes/jobboardroute.js");
app.use("/api/employee", jobboardroutes);

const jobfindroutes = require("./routes/jobFinderroute.js");
app.use("/api/jobs", jobfindroutes);

const Applicationroutes = require("./routes/Applicationroute.js");
app.use("/api/applications", Applicationroutes);

const Applicationfetchcontrol = require("./routes/Applicationfetchroute.js");
app.use("/api/applications", Applicationfetchcontrol);

const Studentsview = require("./routes/StudentView.js");
app.use("/api/students", Studentsview);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
