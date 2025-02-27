const Product = require('../models/Product');
const User = require('../models/User');

const renderHome = (req, res) => {
  res.render('home', { title: 'Home' });
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
};