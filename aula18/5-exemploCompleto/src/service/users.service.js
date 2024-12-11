const userModel = require("../model/user.model");

const getUsers = async () => {
  let users = await userModel.find();
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  return users;
};

const createUser = async (user) => {
  const userCreated = await userModel.create(user);
  return userCreated;
};

const deleteUser = async (email) => {
  const user = await userModel.deleteOne({ email: email });
  console.log(email)
  return user;
};

const getUsersById = async (uid) => {
  const user = await userModel.findById(uid);
  
  return [user];
};

const updateUser = async ({ first_name, last_name, email, password }, uid) => {
  const userUpdated = await userModel.updateOne({_id: uid}, {first_name, last_name, email, password});
  return userUpdated;
};

module.exports = { getUsers, createUser, deleteUser, getUsersById, updateUser };
