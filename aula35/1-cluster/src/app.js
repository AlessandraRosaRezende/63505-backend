const cluster = require('cluster');
const { cpus } = require('os');

const numCPUs = cpus().length;
console.log(numCPUs);

if (cluster.isPrimary) {
  console.log('cluster.isPrimary: ', cluster.isPrimary);
  console.log(`Processo primário - PID: ${process.pid} - gerando worker`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  console.log('Bye bye');
} else {
  console.log('cluster.isPrimary: ', cluster.isPrimary);
  console.log(`Ao ser um processo criado a partir de um fork, não conto como primário, e por isso isPrimary = ${cluster.isPrimary}. Então, sou um worker - PID: ${process.pid}`);
}