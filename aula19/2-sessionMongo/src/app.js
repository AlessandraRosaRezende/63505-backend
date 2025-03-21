const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const fileStore = require('session-file-store');
const mongoStore = require('connect-mongo');

// const fileStorage = fileStore(session);

const app = express();

app.use(cookieParser());
app.use(session({
  store: mongoStore.create({ 
    mongoUrl: 'mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/',
    collectionName: 'sessions',
    ttl: 15,
  }),
  secret: 'CoderSecret',
  resave: false,
  saveUninitialized: false,
}));

app.get('/login', (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Você visitou o site ${req.session.contador} vezes`);
  } else {
    req.session.contador = 1;
    res.send('Bem vindo pela primeira vez!');
  }
  const session = JSON.stringify(req.session);
  console.log(session);
});


app.listen(8080, () => console.log('Server is running on port 8080'));