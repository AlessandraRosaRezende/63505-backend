const mongoose = require('mongoose');

const studentCollection = 'alunos';

const studentSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
    index: true,
  },
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'cursos'
        },
      }
    ],
    default: []
  }
});

// middleware para trazer o populate de cursos

studentSchema.pre('find', function() {
  this.populate('courses.course');
});

const studentModel = mongoose.model(studentCollection, studentSchema);

module.exports = studentModel;