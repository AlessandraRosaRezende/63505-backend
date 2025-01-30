const UserDao = require('../dao/classes/user.dao');

const getUsers = async (req, res) => {
  try {
    const users = await UserDao.getUsers();
    res.send({ status: "success", result: users });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const getUserById = async (req, res) => {
  const { uid } = req.params;
  try {
    const user = await UserDao.getUserById(uid);
    if (user) {
      res.send({ status: "success", result: user });
    } else {
      res.status(404).send({ status: "error", result: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await UserDao.createUser({ name, email, password });
    res.send({ status: "success", result: newUser });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const updateUser = async (req, res) => {
  const { uid } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await UserDao.updateUser(uid, updateData);

    if (updatedUser.modifiedCount === 0) {
      return res.status(404).send({ status: "error", result: "User not found or no changes made" });
    }

    res.send({ status: "success", result: "User updated successfully" });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser };
