const express = require('express');
const bodyParser = require('body-parser');
const brinquedosRouter = require('./routes/brinquedosRouter');
const usuariosRouter = require('./routes/usuariosRouter');
const connection = require('./config/database');

const app = express();
app.use(bodyParser.json());

connection();

const PORT = process.env.PORT;

app.use('/brinquedos', brinquedosRouter);
app.use('/usuarios', usuariosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});