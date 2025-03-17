const userModel = require('./models/user.model');
const mongoose = require('mongoose');

const environment = async() => {
  await mongoose.connect('MONGO_URI');

  let response = await userModel.find({ first_name: 'wanda'}).explain('executionStats');
  console.log(response);
}

environment();
