const mongoose = require('mongoose');

const collection = "Business";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  products: []
})

const BusinessModel = mongoose.model(collection, schema);

module.exports = BusinessModel;