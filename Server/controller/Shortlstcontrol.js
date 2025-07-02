const Shortlist = require("../models/shortList");

const shortlistApplication = async (req, res) => {
  try {
    const { studentId, jobId } = req.body;

    if (!studentId || !jobId) {
      return res.status(400).json({ message: "Missing student or job ID" });
    }

    // Check for duplicates (optional)
    const alreadyShortlisted = await Shortlist.findOne({
      student: studentId,
      job: jobId,
    });
    if (alreadyShortlisted) {
      return res.status(409).json({ message: "Already shortlisted" });
    }

    const newShortlist = new Shortlist({
      student: studentId,
      job: jobId,
    });

    await newShortlist.save();

    res.status(201).json({ message: "Candidate shortlisted successfully" });
  } catch (error) {
    console.error("Shortlisting error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { shortlistApplication };
