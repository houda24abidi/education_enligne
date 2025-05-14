// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Ajouter un étudiant
router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir tous les étudiants
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir un étudiant par ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Étudiant non trouvé" });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modifier un étudiant
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: "Étudiant non trouvé" });
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer un étudiant
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Étudiant non trouvé" });
    res.status(200).json({ message: "Étudiant supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
