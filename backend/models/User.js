// models/userModel.js
const mongoose = require('mongoose');

// Création du schéma utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    default: 'student'
  }
}, { timestamps: true });

// Création du modèle User
const User = mongoose.model('User', userSchema);

module.exports = User;
