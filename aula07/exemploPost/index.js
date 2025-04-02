// npm init -y
// npm i express
// no package.json cria o script do nodemon

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];
let products = [];

app.post('/api/users', (req, res) => {
  const { id, nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).send({ erro: 'Nome e email são obrigatórios' });
  }
  users.push({ id, nome, email });
  res.status(201).json(users);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json({ product });
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const user = users.find(user => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  user.nome = nome;
  user.email = email;
  res.status(200).json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }
  users.splice(index, 1);
  res.status(204).send();
});


app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});