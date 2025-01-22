const mongoose = require('mongoose');

const brinquedoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true }
});

const Brinquedo = mongoose.model('Brinquedo', brinquedoSchema);

module.exports = Brinquedo;