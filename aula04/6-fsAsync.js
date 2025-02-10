const fs = require('fs').promises;

const operacoesAssincronas = async() => {
  await fs.writeFile('./data/exemploPromises.txt', 'Hello again, Coders! Agora com Promises.');
  const resultado = await fs.readFile('./data/exemploPromises.txt', 'utf-8');
  console.log(resultado);

  await fs.appendFile('./data/exemploPromises.txt', '\nMais conteúdo!')
}

console.log('Antes da função');
operacoesAssincronas();
console.log('Depois da função');