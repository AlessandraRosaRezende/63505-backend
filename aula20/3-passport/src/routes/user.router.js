const express = require('express');

const router = express.Router();
const User = require('../models/user.model');
const { createHash } = require('../utils/password');
const passport = require('passport');

router.get('/registro', (req, res) => {
  res.render('registro');
});

router.post('/registro', passport.authenticate('registro', { failureRedirect: '/failregister', failureMessage: true }), async (req, res) => {
    res.redirect('/login?message=Usuário cadastrado com sucesso');
});

router.get('/failregister', (req, res) => {
  console.log("Erro ao cadastrar usuário");
  const messages = req.session.messages || []; // Mensagens armazenadas
  req.session.messages = []; // Limpa as mensagens para evitar repetições

  const errorMessage = messages.length > 0 ? messages[0] : "Erro ao registrar usuário";
  res.send(`Erro ao registrar usuário: ${errorMessage}`);
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

router.get("/failreset", (req, res) => {
  const messages = req.session.messages || []; // Mensagens armazenadas
  req.session.messages = []; // Limpa as mensagens para evitar repetições

  const errorMessage = messages.length > 0 ? messages[0] : "Erro ao resetar password";
  res.send(`Erro ao resetar password: ${errorMessage}`);
});

router.post("/reset-password", passport.authenticate('reset-password', { failureRedirect: '/failreset', failureMessage: true }), async (req, res) => {
  return res.redirect('/login?message=Senha alterada com sucesso');
});

module.exports = router;