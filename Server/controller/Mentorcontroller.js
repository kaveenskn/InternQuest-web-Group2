const Mentor = require("../models/mentors");

exports.getMentorByEmail = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email query parameter is required" });
  }

  try {
    const mentor = await Mentor.findOne({ email }).select(
      "name email position company rating reviews skills location pricePerHour imageUrl available"
    );

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.json(mentor);
  } catch (error) {
    console.error("Error fetching mentor:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
