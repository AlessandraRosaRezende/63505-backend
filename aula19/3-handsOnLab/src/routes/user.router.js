const express = require('express');

const router = express.Router();
const User = require('../models/user.model');

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
      password,
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
  const { first_name, last_name, age } = req.session.user;
  res.render('profile', { first_name, last_name, age });
});

module.exports = router;