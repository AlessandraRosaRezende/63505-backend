const getOrders = async (req, res) => {
  res.send({ status: "sucess", result: "getOrders" });
}

const getOrdersById = async (req, res) => {
  res.send({ status: "sucess", result: "getOrdersById" });
}

const createOrders = async (req, res) => {
  res.send({ status: "sucess", result: "createOrders" });
}

const resolveOrders = async (req, res) => {
  res.send({ status: "sucess", result: "resolveOrders" });
}

module.exports = { getOrders, getOrdersById, createOrders, resolveOrders };