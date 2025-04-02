const start = Date.now();
let soma = 0;
for (let i = 0; i < 10000000000; i++) {
  soma += i;
}
const end = Date.now();
const tempo = end - start;

process.send({ soma, tempo });