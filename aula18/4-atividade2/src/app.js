const express = require('express');
const session = require('express-session');

const app = express();

// Configuração do middleware de sessão
app.use(session({
  secret: 'C0d3r',           // Chave secreta usada para assinar o cookie da sessão
  resave: false,              // Evita que a sessão seja salva no armazenamento a cada requisição
  saveUninitialized: true     // Força a criação de uma sessão, mesmo que ela não seja modificada
}));

// Rota principal, que responde ao caminho '/'
app.get('/', (req, res) => {
  let message = '';

  // Verifica se foi fornecido um nome nos parâmetros da consulta
  if (req.query.name) {
    // Se o nome fornecido for diferente do nome salvo na sessão, ou se o nome atual for "Visitante", atualiza a sessão
    if (req.session.name !== req.query.name) {
      req.session.name = req.query.name;
      req.session.views = 1; // Reinicia o contador para o novo usuário
    } else {
      req.session.views = req.session.views ? req.session.views + 1 : 1;
    }
    message = `${req.session.name}, você visitou a página ${req.session.views} vezes.`;
  } else {
    // Caso não tenha nome na consulta, trata como "Visitante"
    if (req.session.name !== 'Visitante') {
      req.session.name = 'Visitante';
      req.session.views = 1; // Reinicia o contador para o visitante
    } else {
      req.session.views = req.session.views ? req.session.views + 1 : 1;
    }
    message = `${req.session.name}, você visitou a página ${req.session.views} vezes.`;
  }

  // Envia a mensagem de boas-vindas ou de visita ao cliente
  res.send(message);
});


// Rota para fornecer informações sobre a sessão
app.get('/sessionInfo', (req, res) => {
  res.json(req.session);  // Retorna as informações da sessão em formato JSON
});

// Rota de logout para destruir a sessão
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) {
      // destruir o cookie
      res.clearCookie('connect.sid');
      res.send('Logout efetuado com sucesso!');
    } else {
      res.send({ status: 'Erro no logout', body: err });
    }
  });
});


// Inicia o servidor na porta 8081
app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});