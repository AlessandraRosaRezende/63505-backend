const express = require('express');

const router = express.Router();

const usuarios = [
  {
    nome: 'Alessandra',
    sobrenome: 'Rezende',
    idade: 37,
    email: 'ale@example.com',
    telefone: '123456789',
    role: 'admin'
  },
  {
    nome: 'Léo',
    sobrenome: 'Rezende',
    idade: 14,
    email: 'leo@example.com',
    telefone: '123-456-7890',
    role: 'user'
  },
  {
    nome: 'Helena',
    sobrenome: 'Rezende',
    idade: 11,
    email: 'helena@example.com',
    telefone: '987-654-3210',
    role: 'user'
  },
  {
    nome: 'John',
    sobrenome: 'Doe',
    idade: 18,
    email: 'john@example.com',
    telefone: '111-222-3333',
    role: 'user'
  },
  {
    nome: 'Sue',
    sobrenome: 'Doe',
    idade: 18,
    email: 'sue@example.com',
    telefone: '444-555-6666',
    role: 'user'
  },
  {
    nome: 'Back',
    sobrenome: 'End',
    idade: 25,
    email: 'backEnd@example.com',
    telefone: '777-888-9999',
    role: 'admin'
  }
];

const food = [
  { name: "Burgão", price: 10 },
  { name: "hotdog", price: 15 },
  { name: "Risoto", price: 40 },
  { name: "Pasta", price: 35 },
];

router.get('/user', (req, res) => {
  const randomIndex = Math.floor(Math.random() * usuarios.length);
  const randomUser = usuarios[randomIndex];

  res.render('user', { 
    usuarios: randomUser, 
    style: 'index.css' 
  })
});

router.get('/food', (req, res) => {
  const randomIndex = Math.floor(Math.random() * usuarios.length);
  const randomUser = usuarios[randomIndex];

  res.render('products', { 
    usuario: randomUser, 
    isAdmin: randomUser.role === 'admin', 
    style: 'index.css', 
    food 
  });
});

module.exports = router;