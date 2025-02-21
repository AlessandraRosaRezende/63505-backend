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

  app.listen(8080, () => {
    console.log(`Worker ${process.pid} ouvindo na porta 8080`);
  });
}