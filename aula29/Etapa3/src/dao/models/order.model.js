const mongoose = require('mongoose');

const collection = "Orders";

const schema = new mongoose.Schema({
  number: Number,
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Business',
    required: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Users',
    required: true
  },
  products: [],
  totalPrice: Number,
})

const OrderModel = mongoose.model(collection, schema);

module.exports = OrderModel;