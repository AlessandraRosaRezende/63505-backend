const express = require('express');
const app = express();
const managerUsers = require('./ManagerUsers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const manager = new managerUsers();

app.get('/api/users', async (req, res) => {
  const users = await manager.getUsers();
  res.status(200).json(users);
});

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await manager.getUserById(Number(id));
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
  res.status(200).json(user);
});

app.post('/api/users', async (req, res) => {
  const user = req.body;
  if (!user.id || !user.name || !user.email) {
    return res.status(400).json({ message: 'Requisição inválida' });
  }
  await manager.postUser(user);
  res.status(201).json(user);
});

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  if (!user.name || !user.email) {
    return res.status(400).json({ message: 'Requisição inválida' });
  }
  const userToUpdate = await manager.putUser(Number(id), user);
  res.status(200).json({ user: userToUpdate });
});

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  await manager.deleteUser(Number(id));
  res.status(204).end();
});

module.exports = app;