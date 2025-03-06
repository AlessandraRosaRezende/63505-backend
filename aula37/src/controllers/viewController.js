const Product = require('../models/Product');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const renderHome = (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.render('home', { title: 'Home', user: decoded });
    } catch (error) {
      res.render('home', { title: 'Home', user: null });
    }
  } else {
    res.render('home', { title: 'Home', user: null });
  }
};

const renderLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const renderRegister = (req, res) => {
  res.render('register', { title: 'Registrar' });
};

const renderResetPassword = (req, res) => {
  res.render('resetPassword', { title: 'Redefinir Senha', token: req.params.token });
};

const renderProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    const user = req.user;
    const isAdminOrPremium = user && (user.role === 'admin' || user.role === 'premium');
    res.render('products', { products, title: 'Produtos', user: user, isAdminOrPremium: isAdminOrPremium });
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
};

const renderCarts = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = req.user;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    const isAdminOrPremium = user && (user.role === 'admin' || user.role === 'premium');
    res.render('cart', { cart, title: 'Carrinho', user: user, isAdminOrPremium: isAdminOrPremium });
  } catch (error) {
    res.status(500).send('Erro ao buscar carrinho');
  }
};

const renderProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    res.render('userProfile', { user, title: 'Perfil do Usuário' });
  } catch (error) {
    res.status(500).send('Erro ao buscar perfil');
  }
};

const renderForgotPassword = (req, res) => {
  res.render('forgotPassword', { title: 'Esqueci a Senha' });
};

module.exports = {
  renderHome,
  renderLogin,
  renderRegister,
  renderResetPassword,
  renderProducts,
  renderProfile,
  renderForgotPassword,
  renderCarts,
};