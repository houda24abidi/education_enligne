const express = require('express');
const Teacher = require('../models/Teacher');
const router = express.Router();

// Récupérer les informations de l'enseignant
router.get('/profile', async (req, res) => {
  try {
    const teacher = await Teacher.findOne();
    if (!teacher) {
      return res.status(404).json({ message: 'Enseignant non trouvé' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour les informations de l'enseignant
router.put('/profile', async (req, res) => {
  try {
    const { nom, email, specialite, phone } = req.body;

    // Trouver et mettre à jour les informations de l'enseignant
    const teacher = await Teacher.findOneAndUpdate(
      {}, // Recherche sans condition pour prendre le premier document
      { nom, email, specialite, phone },
      { new: true } // Retourne le document mis à jour
    );

    if (!teacher) {
      return res.status(404).json({ message: 'Enseignant non trouvé pour mise à jour' });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
