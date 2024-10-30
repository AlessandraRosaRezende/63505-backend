const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Rota raiz - entre na rota /saldar para ver outra mensagem');
});

app.get('/saldar', (req, res) => {
  res.send('Olá, pessoal. Agora do express!!!');
});

app.listen(8080, () =>{
  console.log('Server running on port 8080');
})


// GET - buscar informações
// POST - enviar informações
// PUT - atualizar informações
// DELETE - deletar informações
