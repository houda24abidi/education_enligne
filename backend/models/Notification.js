// models/notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
