const mongoose = require('mongoose');

const devoirSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: String,
  dateLimite: { type: Date, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  fichiers: [String] // URLs ou noms des fichiers soumis
}, { timestamps: true });

module.exports = mongoose.model('Devoir', devoirSchema);
