const nome = "             Xablau          ";

console.log(nome);
console.log(nome.trim());

const nomeInvalido = '                       ';

if (nomeInvalido.trim() === '') {
  console.log('Nome inválido');
};

const array = [1, 2, 3, 4, [5, 6, 7, [8, [9], 10], 11, 12], 13, 14, 15];

console.log(array);
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));