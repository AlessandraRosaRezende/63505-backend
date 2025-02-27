const express = require('express');
const router = express.Router();
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const { renderRegister, renderForgotPassword } = require('../controllers/viewController');

router.get('/register', renderRegister);
router.post('/register', register);
router.post('/login', login);
router.get('/forgot-password', renderForgotPassword);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/logout', (req, res) => {
  res.clearCookie('token'); // Limpa o cookie de autenticação
  res.redirect('/login');
});


module.exports = router;