const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct, getProducts, renderAddProduct, renderEditProduct } = require('../controllers/productController');
const { authMiddleware, premiumMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.get('/', authMiddleware, getProducts); // Aplique o authMiddleware aqui
router.get('/add', authMiddleware, premiumMiddleware, renderAddProduct);
router.post('/', authMiddleware, premiumMiddleware, createProduct);
router.get('/edit/:id', authMiddleware, premiumMiddleware, renderEditProduct);
router.put('/:id', authMiddleware, premiumMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;