// Importa o módulo express para criar um roteador
const express = require('express');
// Cria uma instância do roteador express
const router = express.Router();
// Importa o modelo de usuário definido em outro arquivo
const User = require('../models/User');
// Importa os middlewares de autenticação e autorização
const { autenticacao } = require('../middlewares/auth');
const { createHash } = require('../utils/password');
const passport = require('passport');

// Define uma rota GET para o caminho '/registro'
router.get('/registro', (req, res) => {
    // Renderiza a página de registro
    res.render('registro');
});

// Define uma rota POST para o caminho '/registro'
router.post('/registro', passport.authenticate('registro', { failureRedirect: '/failregister', failureMessage: true }), async (req, res) => {
    return res.redirect('/login?message=Usuário registrado com sucesso');
});

router.get("/failregister", (req, res) => {
    console.log("failed Strategy");
    const messages = req.session.messages || []; // Mensagens armazenadas
    req.session.messages = []; // Limpa as mensagens para evitar repetições

    const errorMessage = messages.length > 0 ? messages[0] : "Erro ao registrar usuário";
    res.send(`Erro ao registrar usuário: ${errorMessage}`);
});

// Define uma rota GET para o caminho '/perfil' que usa o middleware de autenticação
router.get('/perfil', autenticacao, (req, res) => {
    // Obtém os dados do usuário da sessão
    const { first_name, last_name, email, age } = req.session.user;
    // Renderiza a página de perfil com os dados do usuário
    res.render('perfil', { first_name, last_name, email, age });
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
    return res.redirect('/login?message=Senha redefinida com sucesso');
});

// Exporta o roteador para que possa ser usado em outros arquivos
module.exports = router;