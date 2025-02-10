const express = require('express');
const { fork } = require('child_process');

const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  visitas++;
  res.send(`Número de visitas: ${visitas}`);
});

app.get('/calculo-bloq', (req, res) => {
  const start = Date.now();
  let soma = 0;
  for (let i = 0; i < 10000000000; i++) {
    soma += i;
  }
  const end = Date.now();
  const tempo = end - start;
  res.send(`Resultado do cálculo bloqueante: ${soma} - Tempo de execução: ${tempo}ms`);
})

app.get('/calculo-nobloq', (req, res) => {
  const childProcess = fork('./calculo.js');

  childProcess.on('message', (resultado) => {
    const { soma, tempo } = resultado;
    res.send(`Resultado do cálculo não bloqueante: ${soma} - Tempo de execução: ${tempo}ms`);
  });

  childProcess.on('exit', (code) => {
    console.log('Processo filho finalizado com o código: ', code);
  });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})