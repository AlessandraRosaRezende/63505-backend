const string = 'Olá, mundo!';
const number = 42;
const bool = true; // booleano: true or false
const nulo = null; // null
const indefinido = undefined; // undefined
let r;
console.log(r); // undefined

r = string;
console.log(r); // Olá, mundo!

const objeto = {
  nome: 'Fulano',
  idade: 42,
  active: false,
  endereco: {
    rua: 'Rua dos Bobos',
    numero: 0
  }
};

const array = [1, 2, 3, 4, 5];

const arrayObjetos = [
  { nome: 'Fulano', idade: 42 },
  { nome: 'Ciclano', idade: 32 }
];

const y = objeto;
console.log(y);
console.log(y == objeto); // true

const nome = 'Fulano'; // não altera o valor da variável
// nome = 'Ciclano'; // TypeError: Assignment to constant variable.
console.log(nome);

const PI = 3.14159265359;

let x = 10;
x = 89;
console.log(x);

var z = 10; // não recomendado