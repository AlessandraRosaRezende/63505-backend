const express = require('express');
const petsRouter = require('./routes/pets.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pets', petsRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});