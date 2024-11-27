const express = require('express');
const mongoose = require('mongoose');
const alunosRouter = require('./routes/alunos.router');

const app = express();

app.use(express.json());

app.use('/alunos', alunosRouter);

// conexão com o Mongo Atlas usando o mongoose
mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/escola') // informamos a database escola
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  }).catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error.message);
  });

app.listen(8080, () => {
  console.log('Aplicação rodando na porta 8080');
});

