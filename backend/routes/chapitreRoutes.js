const express = require('express');
const router = express.Router();
const Chapitre = require('../models/Chapitre');

// ➕ Ajouter un chapitre
router.post('/', async (req, res) => {
  try {
    const chapitre = new Chapitre(req.body);
    await chapitre.save();
    res.status(201).json(chapitre);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📃 Tous les chapitres d’un cours
router.get('/:courseId', async (req, res) => {
  try {
    const chapitres = await Chapitre.find({ course: req.params.courseId });
    res.json(chapitres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
