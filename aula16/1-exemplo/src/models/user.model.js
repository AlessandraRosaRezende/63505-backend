const mongoose = require('mongoose');

const userCollection = 'users';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  gender: String,
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;