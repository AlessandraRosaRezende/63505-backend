const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const viewRouter = require('./routes/view.router');
const userRouter = require('./routes/user.router');
const sessionRouter = require('./routes/session.router');

const app = express();

app.use(cookieParser());

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: mongoStore.create({
    mongoUrl: 'mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/',
    ttl: 15,
  }),
  secret: 'CoderSecret',
  resave: false,
  saveUninitialized: false,
}));

app.use('/', viewRouter);
app.use('/', userRouter);
app.use('/', sessionRouter);

mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/')
  .then(() => console.log('Conectado ao MongoDB com sucesso'))
  .catch((error) => console.log('Erro ao conectar ao MongoDB: ' + error));

app.listen(8080, () => console.log('Server is running on port 8080'));