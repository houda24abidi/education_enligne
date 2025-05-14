const express = require('express');
const multer = require('multer');
const Quiz = require('../models/Quiz');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
const router = express.Router();

// Ajouter un quiz avec des fichiers
router.post('/', upload.array('files'), async (req, res) => {
  try {
    const { titre } = req.body;
    const files = req.files.map(file => file.path); // Sauvegarder le chemin du fichier dans la base de données

    const quiz = new Quiz({
      titre,
      files
    });

    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du quiz', error });
  }
});

module.exports = router;
