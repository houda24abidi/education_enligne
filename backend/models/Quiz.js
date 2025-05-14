const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true, // Chaque question doit avoir un texte
  },
  options: {
    type: [String], // Options possibles pour la question
    required: true,
  },
  correctAnswer: {
    type: String, // La réponse correcte
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  questions: [questionSchema], // Tableau de questions
  files: {
    type: [String], 
    default: [],
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
