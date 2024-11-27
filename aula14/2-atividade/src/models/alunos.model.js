const mongoose = require('mongoose');

const alunosCollection = 'alunos';

// todos os campos são requeridos
const alunosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  }
});

module.exports = mongoose.model(alunosCollection, alunosSchema);