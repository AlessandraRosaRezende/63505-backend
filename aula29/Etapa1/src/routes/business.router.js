const express = require('express');
const { getBusiness, getBusinessById, createBusiness, addProduct } = require('../controllers/business.controller');

const router = express.Router();

router.get('/', getBusiness);
router.get('/:bid', getBusinessById);
router.post('/', createBusiness);
router.post('/:bid/product', addProduct);

module.exports = router;