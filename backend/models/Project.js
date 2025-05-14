// models/Project.js
const mongoose = require('mongoose');

// Définir le schéma du projet
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: String, required: true },
});

// Créer un modèle pour le projet
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
