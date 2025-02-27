const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sendEmail } = require('../services/emailService');
const crypto = require('crypto');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.redirect('/register-success');
  } catch (error) {
    res.status(500).send('Erro ao registrar usuário');
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Credenciais inválidas');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send('Credenciais inválidas');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true }); // Armazena o token em um cookie
    res.redirect('/products');
  } catch (error) {
    res.status(500).send('Erro ao fazer login');
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hora

    await User.updateOne({ _id: user._id }, {
      resetPasswordToken: resetToken,
      resetPasswordExpires: user.resetPasswordExpires,
    });

    const resetLink = `http://localhost:8080/reset-password/${resetToken}`;
    await sendEmail(email, 'Recuperação de Senha', `Clique <a href="${resetLink}">aqui</a> para redefinir sua senha.`);
    res.redirect('/forgot-password-success');
  } catch (error) {
    res.status(500).send('Erro ao solicitar recuperação de senha');
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).send('Token inválido ou expirado');
    }

    const isSamePassword = await bcrypt.compare(password, user.password);
    if (isSamePassword) {
      return res.status(400).send('Não é possível utilizar a mesma senha!');
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.redirect('/login');
  } catch (error) {
    res.status(500).send('Erro ao redefinir senha');
  }
};

module.exports = { register, login, forgotPassword, resetPassword };