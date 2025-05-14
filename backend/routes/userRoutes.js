// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Assurez-vous que le chemin est correct

// Exemple de route pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
