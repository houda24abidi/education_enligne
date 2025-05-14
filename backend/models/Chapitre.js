const mongoose = require('mongoose');

const chapitreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  fichiers: [String] // URLs ou noms de fichiers
}, { timestamps: true });

module.exports = mongoose.model('Chapitre', chapitreSchema);
