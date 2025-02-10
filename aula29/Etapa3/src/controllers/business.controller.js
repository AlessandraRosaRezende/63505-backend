const BusinessDao = require('../dao/classes/business.dao');

const getBusiness = async (req, res) => {
  try {
    const business = await BusinessDao.getBusiness();
    res.send({ status: "success", result: business });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  try {
    const business = await BusinessDao.getBusinessById(bid);
    if (business) {
      res.send({ status: "success", result: business });
    } else {
      res.status(404).send({ status: "error", result: "Business not found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const createBusiness = async (req, res) => {
  const { name, products } = req.body;
  try {
    const newBusiness = await BusinessDao.createBusiness({ name, products });
    res.send({ status: "success", result: newBusiness });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const updateBusiness = async (req, res) => {
  const { bid } = req.params;
  const updateData = req.body;

  try {
    const updatedBusiness = await BusinessDao.updateBusiness(bid, updateData);

    if (updatedBusiness.modifiedCount === 0) {
      return res.status(404).send({ status: "error", result: "Business not found or no changes made" });
    }

    res.send({ status: "success", result: "Business updated successfully" });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

module.exports = { getBusiness, getBusinessById, createBusiness, updateBusiness };
