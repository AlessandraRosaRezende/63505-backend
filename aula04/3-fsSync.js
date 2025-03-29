const fs = require('fs');

fs.writeFileSync('./data/exemplo.txt', 'Hello, Coders! Sou o conteúdo de um arquivo!!!');

const exists = fs.existsSync('./data/exemplo.txt');
console.log(exists);

if (exists) fs.appendFileSync('./data/exemplo.txt', ' Agora conteúdo novo!')

fs.appendFileSync('./data/exemplo.txt', '\nMais conteúdo!')
let conteudo = fs.readFileSync('./data/exemplo.txt', 'utf-8');

const users = 'Alessandra, Gustavo, Daniel'

fs.appendFileSync('./data/exemplo.txt', users)

console.log(conteudo);