const express = require('express');
const { getOrders, getOrdersById, createOrders, resolveOrders } = require('../controllers/order.controller');

const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrdersById);
router.post('/', createOrders);
router.post('/:oid', resolveOrders);


module.exports = router;