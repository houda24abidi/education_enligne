const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  icon: { type: String, required: true },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
