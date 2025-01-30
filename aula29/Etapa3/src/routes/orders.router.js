const express = require('express');
const { getOrders, getOrderById, createOrder, updateOrder } = require('../controllers/order.controller');

const router = express.Router();

router.get('/', getOrders);
router.get('/:oid', getOrderById);
router.post('/', createOrder);
router.put('/:oid', updateOrder);


module.exports = router;