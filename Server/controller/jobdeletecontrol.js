const Job = require("../models/Jobpost");
const Employee = require("../models/employee");

const deleteJobById = async (req, res) => {
  try {
    const userId = req.user.id;
    const jobId = req.params.id;

    const employee = await Employee.findOne({ user: userId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if the job exists and belongs to this employee
    const job = await Job.findOne({ _id: jobId, employee: employee._id });
    if (!job) {
      return res.status(404).json({ message: "Job not found or unauthorized" });
    }

    await job.deleteOne();
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ message: "Server error while deleting job" });
  }
};

module.exports = { deleteJobById };