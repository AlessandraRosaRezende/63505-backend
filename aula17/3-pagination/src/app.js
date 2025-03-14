const mongoose = require('mongoose');
const usersModel = require('./models/users.model');

const environment = async () => {
  await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb?retryWrites=true&w=majority&appName=ClusterCoder');

  let users = await usersModel.paginate({gender: 'Female'}, { page: 2, limit: 10 });

  console.log(users);
};

environment();