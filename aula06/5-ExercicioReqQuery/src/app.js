const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

const usuarios = [
  { id: 1, nome: 'João', sobrenome: 'Oliveira', genero: 'M' },
  { id: 2, nome: 'Maria', sobrenome: 'Silva', genero: 'F' },
  { id: 3, nome: 'Ana', sobrenome: 'Santos', genero: 'F' },
  { id: 4, nome: 'Pedro', sobrenome: 'Ferreira', genero: 'M' },
  { id: 5, nome: 'Paulo', sobrenome: 'Oliveira', genero: 'M' },
  { id: 6, nome: 'Mariana', sobrenome: 'Silva', genero: 'F' },
  { id: 7, nome: 'Antônio', sobrenome: 'Santos', genero: 'M' },
  { id: 8, nome: 'José', sobrenome: 'Ferreira', genero: 'M' },
  { id: 9, nome: 'Paula', sobrenome: 'Oliveira', genero: 'F' },
  { id: 10, nome: 'Marta', sobrenome: 'Silva', genero: 'F' },
];

app.get('/', (req, res) => {
  let { genero } = req.query;

  if (!genero || genero.toUpperCase() !== 'M' && genero.toUpperCase() !== 'F') {
    return res.status(200).json({ usuarios });
  } else {
    let usuariosFiltrados = usuarios.filter((usuario) => usuario.genero === genero.toUpperCase());
    return res.status(200).json({ usuariosFiltrados });
  }
});

module.exports = app;