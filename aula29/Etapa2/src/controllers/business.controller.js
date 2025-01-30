const getBusiness = async (req, res) => {
  res.send({ status: "sucess", result: "getUBusiness" });
}

const getBusinessById = async (req, res) => {
  res.send({ status: "sucess", result: "getBusinessById" });
}

const createBusiness = async (req, res) => {
  res.send({ status: "sucess", result: "createBusiness" });
}

const addProduct = async (req, res) => {
  res.send({ status: "sucess", result: "addProduct" });
}

module.exports = { getBusiness, getBusinessById, createBusiness, addProduct };