const express = require('express');
const router = express.Router();
const {
  renderHome,
  renderLogin,
  renderRegister,
  renderResetPassword,
  renderProducts,
  renderProfile,
  renderForgotPassword,
} = require('../controllers/viewController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/', renderHome);
router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.get('/reset-password/:token', renderResetPassword);
router.get('/products', renderProducts);
router.get('/profile', authMiddleware, renderProfile);
router.get('/forgot-password', renderForgotPassword);
router.get('/forgot-password-success', (req, res) => {
  res.render('forgotPasswordSuccess', { title: 'Link de recuperação enviado' });
});
router.get('/register-success', (req, res) => {
  res.render('registerSuccess', { title: 'Registro concluído' });
});

module.exports = router;