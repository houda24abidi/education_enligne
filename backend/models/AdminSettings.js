// models/AdminSettings.js
const mongoose = require('mongoose');

const AdminSettingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('AdminSettings', AdminSettingsSchema);
