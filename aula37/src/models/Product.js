const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  owner: { type: String, default: 'admin' }, // Salva o email do usuário premium
});

module.exports = mongoose.model('Product', ProductSchema);