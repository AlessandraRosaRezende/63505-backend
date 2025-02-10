const mongoose = require('mongoose');

const usersCollections = 'users';

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,   // tipo do dado
    required: true  // informa que o dado é obrigatório
  },
  last_name: String,
  email: {
    type: String, 
    unique: true,   // informa que o dado é único - o email não pode ser repetido
    required: true
  }
});

module.exports = mongoose.model(usersCollections, usersSchema);