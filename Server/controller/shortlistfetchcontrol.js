// controllers/shortlistController.js
const Shortlist = require("../models/shortList.js");
const Student = require("../models/student");
const User = require("../models/User.js");
const Job = require("../models/Jobpost.js");

const getRecentShortlists = async (req, res) => {
  try {
    const shortlists = await Shortlist.find()
      .sort({ shortlistedAt: -1 })
      .limit(10)
      .populate({
        path: "student",
        select: "fullname user",
        populate: { path: "user", select: "email" },
      })
      .populate({ path: "job", select: "title" });

    const response = shortlists.map((item) => ({
      id: item._id,
      fullname: item.student?.fullname || "N/A",
      email: item.student?.user?.email || "N/A",
      title: item.job?.title || "N/A",
      shortlistedAt: item.shortlistedAt,
    }));

    res.json(response);
  } catch (error) {
    console.error("Error fetching shortlists:", error);
    res.status(500).json({ message: "Server error fetching shortlists" });
  }
};

module.exports = {
  getRecentShortlists,
};
