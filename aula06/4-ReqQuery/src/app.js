const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  let consultas = req.query;

  let { nome, sobrenome, idade } = consultas;

  res.json(consultas);
});

module.exports = app;