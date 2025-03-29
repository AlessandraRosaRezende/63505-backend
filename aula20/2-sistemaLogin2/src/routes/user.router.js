const express = require('express');

const router = express.Router();
const User = require('../models/user.model');
const { createHash } = require('../utils/password');

router.get('/registro', (req, res) => {
  res.render('registro');
});

router.post('/registro', async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    if (!first_name || !last_name || !email || !age || !password) {
      return res.status(400).send('Favor preencher todos os campos');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Usuário já cadastrado');
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password),
    });
    await newUser.save();

    res.redirect('/login?message=Usuário cadastrado com sucesso');
  } catch (error) {
    console.log('Erro ao cadastrar no banco', error);
    res.status(500).send('Erro ao cadastrar no banco');
  }
});

router.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Acesso não autorizado');
  };
  const { first_name, last_name, age, email } = req.session.user;
  res.render('profile', { first_name, last_name, age, email });
});

router.get('/reset-password', (req, res) => {
  res.render('reset-password');
});

router.post('/reset-password', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send('Favor preencher todos os campos');
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    const newPassword = createHash(password);

    await User.updateOne({ email }, { password: newPassword });

    return res.redirect('/login?message=Senha alterada com sucesso');
  } catch(error) {
    console.log('Erro ao resetar senha', error);
    res.status(500).send('Erro ao resetar senha');
  }
});

module.exports = router;