const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  specialite: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
