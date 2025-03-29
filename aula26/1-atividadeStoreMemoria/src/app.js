const express = require('express');
const bodyParser = require('body-parser');
const brinquedosRouter = require('./routes/brinquedosRouter');
const usuariosRouter = require('./routes/usuariosRouter');

const app = express();
app.use(bodyParser.json());

app.use('/brinquedos', brinquedosRouter);
app.use('/usuarios', usuariosRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});