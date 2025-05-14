const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET tous les projets
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST ajouter un projet
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Erreur ajout projet' });
  }
});

// DELETE un projet
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Projet supprimé' });
  } catch (err) {
    res.status(400).json({ message: 'Erreur suppression' });
  }
});

module.exports = router;
