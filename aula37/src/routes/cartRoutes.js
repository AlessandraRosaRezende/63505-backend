const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateQuantity, removeItem } = require('../controllers/cartController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.post('/update-quantity', authMiddleware, updateQuantity);
router.post('/remove', authMiddleware, removeItem);

module.exports = router;