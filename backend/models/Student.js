// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
