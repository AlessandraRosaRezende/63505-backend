const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const usuarios = require('./utils/users');
// const passport = require('passport');
const initializePassport = require('./config/passport.config');
const passportCall = require('./utils/passportCall');
const auth = require('./middlewares/auth');

const app = express();

initializePassport();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = usuarios.find(user => user.email === email);
  if (!user) {
    res.status(401).send('Usuario nao encontrado');
  }
  if (user && user.senha !== senha) {
    return res.status(401).send('Senha incorreta');
  }
  let token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'coderToken', { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true } );
  res.json({ message: 'Login efetuado com sucesso', token });
});

app.get('/current', passportCall('jwt'), auth(), (req, res) => {
  res.send(req.user);
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});