const express = require('express');
const { Command } = require('commander');
const dotenv = require('dotenv');

const app = express();

const program = new Command();

program
  .option('-m, --mode <mode>', 'Ambiente de execução')
  .parse(process.argv);

const options = program.opts();

if (options.mode === 'development') {
  dotenv.config({ path: './.env.development.local' });
} else if (options.mode === 'production') {
  dotenv.config({ path: './.env.production.local' });
} else {
  console.log('Ambiente de trabalho não definido');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send(`Hello Coders! Servidor rodando no ambiente ${process.env.NODE_ENV} na porta ${process.env.PORT}. As configurações desse ambiente são: ${process.env.MONGO_URL} e ${process.env.API_KEY}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
