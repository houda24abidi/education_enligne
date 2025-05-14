const express = require("express");
const Report = require("../models/report"); // Adjust path as necessary
const router = express.Router();

// GET all reports
router.get("/reports", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reports", error: err });
  }
});

// POST a new report (if you want to create reports from the backend)
router.post("/reports", async (req, res) => {
  const { title, description, value, icon } = req.body;
  
  try {
    const newReport = new Report({
      title,
      description,
      value,
      icon,
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (err) {
    res.status(500).json({ message: "Error creating report", error: err });
  }
});

// PUT to update a report (optional, for editing)
router.put("/reports/:id", async (req, res) => {
  const { title, description, value, icon } = req.body;
  
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      req.params.id,
      { title, description, value, icon },
      { new: true }
    );
    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(500).json({ message: "Error updating report", error: err });
  }
});

// DELETE a report
router.delete("/reports/:id", async (req, res) => {
  try {
    await Report.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Report deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting report", error: err });
  }
});

module.exports = router;
