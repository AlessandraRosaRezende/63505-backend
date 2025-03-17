const userModel = require('./models/user.model');
const mongoose = require('mongoose');

const environment = async() => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true');

  let response = await userModel.find({ first_name: 'wanda'}).explain('executionStats');
  console.log(response);
}

environment();