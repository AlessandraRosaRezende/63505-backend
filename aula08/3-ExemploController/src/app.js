const express = require('express');
const petRouter = require('./routes/pets.router');
const userRouter = require('./routes/users.router');
const testRouter = require('./routes/test.router')

const app = express();

app.use(express.json()); // para o express reconhecer o body - req.body

// configura para interpretar solicitações com dados codificados no formato URL
app.use(express.urlencoded({ extended: true }))

// configura o aplicativo para servir arquivos estáticos que estão na pasta public
app.use(express.static(__dirname+'/public'));

// /api/users
// /api/pets
app.use('/api/pets', petRouter);
app.use('/api/users', userRouter);
app.use('/test', testRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});