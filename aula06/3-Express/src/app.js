const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

const fakeUsers = [
  {
    id: 1,
    nome: "John",
    sobrenome: "Doe",
    idade: 25,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    nome: "Alessandra",
    sobrenome: "Rezende",
    idade: 37,
    email: "alerezende@example.com",
  },
  {
    id: 3,
    nome: "Sue",
    sobrenome: "Doe",
    idade: 30,
    email: "suedoe@example.com",
  },
];

app.get('/bemvindo', (req, res) => {
  const htmlResponse = '<h1 style="color: red;">Bem-vindo ao Express!</h1>';
  res.send(htmlResponse);
})

app.get('/', (req, res) => {
  res.send('Não tem nada aqui!')
})

app.get('/usuario', (req, res) => {
  res.json(fakeUsers);
})

// usuario/search?nome=John
// tem que ficar acima das rotas do req.params

app.get('/usuario/search', (req, res) => {
  const { nome } = req.query;
  console.log(req);

  const user = fakeUsers.find((user) => user.nome === nome);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário encontrado', user });
});

app.get('/usuario/:userId', (req, res) => {  // /usuario/1 -> /1 é o req.params
  const { userId } = req.params;
  // console.log(id, typeof id);
  // console.log(req);
  const user = fakeUsers.find((user) => user.id === Number(userId));

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário encontrado', user });
});

app.get('/usuario/:nome/:sobrenome', (req, res) => {  // /usuario/Alessandra/Rezende
  const { nome, sobrenome } = req.params;

  const user = fakeUsers.find((user) => user.nome === nome && user.sobrenome === sobrenome);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json({ message: 'Usuário encontrado', user });
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;