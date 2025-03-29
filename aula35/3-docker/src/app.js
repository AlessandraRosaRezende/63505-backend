const express = require('express');
const cluster = require('cluster');
const { cpus } = require('os');

if (cluster.isPrimary) {
  console.log(`processo primário ${process.pid} gerando processo worker`);

  const numCPUS = cpus().length;
  console.log(`numCPUS: ${numCPUS}`);

  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  };

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} morreu. Criando novo worker`);
    cluster.fork();
    console.log(`Worker ${process.pid} criado`);
  });
} else {
  const app = express();

  app.get('/', (req, res) => {
    res.send(`Olá do worker ${process.pid}`);
  });

  app.get('/simpleOperation', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    res.send({ status: 'success', message: `O worker ${process.pid} atendeu a requisição e o resultado é ${sum}` });
  });

  app.get('/complexOperation', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    res.send({ status: 'success', message: `O worker ${process.pid} atendeu a requisição e o resultado é ${sum}` });
  });

  app.listen(8080, () => {
    console.log(`Worker ${process.pid} ouvindo na porta 8080`);
  });
}