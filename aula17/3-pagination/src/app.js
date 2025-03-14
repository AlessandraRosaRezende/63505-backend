const mongoose = require('mongoose');
const usersModel = require('./models/users.model');

const environment = async () => {
  await mongoose.connect('MONGO_URI');

  let users = await usersModel.paginate({gender: 'Female'}, { page: 2, limit: 10 });

  console.log(users);
};

environment();
