const express = require('express');
const { getBusiness, getBusinessById, createBusiness, updateBusiness } = require('../controllers/business.controller');

const router = express.Router();

router.get('/', getBusiness);
router.get('/:bid', getBusinessById);
router.post('/', createBusiness);
router.put('/:bid', updateBusiness)

module.exports = router;