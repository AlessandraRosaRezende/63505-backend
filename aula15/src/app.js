const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const userRouter = require('./routes/user.router');
const viewsRouter = require('./routes/views.router');

const path = require('path');

const app = express();

const pathView = path.join(`${__dirname}/views`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set("views", pathView);

app.use('/', viewsRouter);
app.use('/user', userRouter);

app.use(express.static(path.join(`${__dirname}/public`)));

// aqui é o nome da database
mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/usersdb') // informamos a database escola
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  }).catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error.message);
  });

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});