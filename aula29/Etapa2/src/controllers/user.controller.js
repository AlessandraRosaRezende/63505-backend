const getUsers = async (req, res) => {
  res.send({ status: "sucess", result: "getUsers" });
}

const getUserById = async (req, res) => {
  res.send({ status: "sucess", result: "getUserById" });
}

const saveUser = async (req, res) => {
  res.send({ status: "sucess", result: "saveUser" });
}

module.exports = { getUsers, getUserById, saveUser };