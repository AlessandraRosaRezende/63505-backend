const mongoose = require('mongoose');

const collection = "Users";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
  },
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Orders'
    }
  ]
})

const UsersModel = mongoose.model(collection, schema);

module.exports = UsersModel;