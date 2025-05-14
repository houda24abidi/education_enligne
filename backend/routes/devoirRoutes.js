const express = require('express');
const router = express.Router();
const Devoir = require('../models/Devoir');

// ➕ Ajouter un devoir
router.post('/', async (req, res) => {
  try {
    const devoir = new Devoir(req.body);
    await devoir.save();
    res.status(201).json(devoir);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📃 Tous les devoirs d'un cours
router.get('/:courseId', async (req, res) => {
  try {
    const devoirs = await Devoir.find({ course: req.params.courseId });
    res.json(devoirs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
