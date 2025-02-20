const cluster = require('cluster');
const { cpus } = require('os');
const express = require('express');

const numCPUs = cpus().length;
console.log(numCPUs);

if (cluster.isPrimary) {
  console.log('cluster.isPrimary: ', cluster.isPrimary);
  console.log(`Processo primário - PID: ${process.pid} - gerando worker`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('message', (worker, message) => {
    console.log(`Mensagem recebida do worker ${worker.process.pid}: ${message}`);
  });

  console.log('Bye bye');
} else {
  const app = express();

  console.log('cluster.isPrimary: ', cluster.isPrimary);
  console.log(`Ao ser um processo criado a partir de um fork, não conto como primário, e por isso isPrimary = ${cluster.isPrimary}. Então, sou um worker - PID: ${process.pid}`);

  app.get('/', (req, res) => {
    res.send({ status: 'success', message: `Requisição atendida pelo worker de PID: ${process.pid}` });
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
    console.log(`Worker PID: ${process.pid} - escutando na porta 8080`);
  });
}