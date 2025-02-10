const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'CoderSecret', // Chave secreta para assinar o cookie de sessão,
  resave: true, // salvar a sessão mesmo que ela não tenha sido modificada
  saveUninitialized: true // salvar a sessão mesmo que ela não tenha sido inicializada
}));

app.get('/setSession', (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Você visitou o site ${req.session.counter} vezes`);
  } else {
    req.session.counter = 1;
    res.send('Bem-vindo ao site');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) res.send('Logout ok!');
    else res.send({ status: 'Logout error', body: err });
  });
});

app.listen(8080, () => console.log('Server is running on port 8080'));