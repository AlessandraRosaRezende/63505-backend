const express = require('express');
const operacoes = require('mathoperatorpackage');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/soma', (req, res) => {
  const { a, b } = req.query;
  console.log(typeof a, typeof b); // tudo o que vem pela rota é string
  const resultado = operacoes.somar(Number(a), Number(b));
  res.send(`O resultado da soma é: ${resultado}`);
});

app.get('/subtracao', (req, res) => {
  const { a, b } = req.query;
  console.log(typeof a, typeof b); // tudo o que vem pela rota é string
  const resultado = operacoes.subtrair(Number(a), Number(b));
  res.send(`O resultado da subtração é: ${resultado}`);
});

app.get('/multiplicacao', (req, res) => {
  const { a, b } = req.query;
  console.log(typeof a, typeof b); // tudo o que vem pela rota é string
  const resultado = operacoes.multiplicar(Number(a), Number(b));
  res.send(`O resultado da multiplicação é: ${resultado}`);
});

app.get('/divisao', (req, res) => {
  const { a, b } = req.query;
  console.log(typeof a, typeof b); // tudo o que vem pela rota é string
  const resultado = operacoes.dividir(Number(a), Number(b));
  res.send(`O resultado da divisão é: ${resultado}`);
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');  
});