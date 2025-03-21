const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.use((req, res, next) => {
  if (req.session.user) {
    res.locals = { user: req.session.user };
  };
  next();
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (!user || user.password !== password) {
      return res.status(400).send('Usuário ou senha incorretos');
    }

    req.session.user = user;
    const session = JSON.stringify(req.session);
    console.log(session);
    res.redirect('/profile');
  } catch (error) {
    console.log('Erro ao logar no banco', error);
    res.status(500).send('Erro ao logar no banco');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) {
      res.send('Logout efetuado com sucesso!');
    } else {
      res.send({ status: 'Erro no logout', body: err });
    }
  });
});

module.exports = router;