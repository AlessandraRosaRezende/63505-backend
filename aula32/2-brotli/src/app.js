const express = require('express');
const compression = require('express-compression');

const app = express();

app.use(compression({
  brotli: { enabled: true, zlib: {} },
}));

app.get('/stringridiculamentegrande', (req, res) => {
  let string = 'Olá Coders, sou uma string ridiculamente grande!!!!!';
  for (let i = 0; i < 10000000; i++) {
    string += 'Olá Coders, sou uma string ridiculamente grande!!!!!';
  }
  res.send(string);
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});