const OrderDao = require('../dao/classes/order.dao');

const getOrders = async (req, res) => {
  try {
    const orders = await OrderDao.getOrders();
    res.send({ status: "success", result: orders });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const getOrderById = async (req, res) => {
  const { oid } = req.params;
  try {
    const order = await OrderDao.getOrdersById(oid);
    if (order) {
      res.send({ status: "success", result: order });
    } else {
      res.status(404).send({ status: "error", result: "Order not found" });
    }
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const createOrder = async (req, res) => {
  const { user, products, business } = req.body;
  try {
    const newOrder = await OrderDao.createOrder({ user, products, business });
    res.send({ status: "success", result: newOrder });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { oid } = req.params;
  const updateData = req.body;

  try {
    const updatedOrder = await OrderDao.updateOrder(oid, updateData);

    if (updatedOrder.modifiedCount === 0) {
      return res.status(404).send({ status: "error", result: "Order not found or no changes made" });
    }

    res.send({ status: "success", result: "Order updated successfully" });
  } catch (error) {
    res.status(500).send({ status: "error", result: error.message });
  }
};

module.exports = { getOrders, getOrderById, createOrder, updateOrder };
