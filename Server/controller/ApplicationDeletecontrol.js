// controllers/applicationController.js

const Application = require("../models/application");

// DELETE /api/applications/:id
const ApplicationDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Application.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  ApplicationDelete,
};
