const mongoose = require("mongoose");
const Shortlist = require("../models/shortList");

const deleteShortlistedCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await Shortlist.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Shortlisted candidate not found" });
    }

    res.status(200).json({
      message: "Shortlisted candidate deleted successfully",
      deletedCandidate: result,
    });
  } catch (err) {
    console.error("Error deleting shortlisted candidate:", err);
    res.status(500).json({ message: "Server error deleting shortlisted candidate" });
  }
};

module.exports = {
  deleteShortlistedCandidate,
};
