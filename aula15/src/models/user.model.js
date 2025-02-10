const mongoose = require('mongoose');

// aqui é o nome da coleção
const userCollection = "users"

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: { 
    type: String, 
    default: '/images/default-avatar.png'  // Caminho para a imagem padrão
  }
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;