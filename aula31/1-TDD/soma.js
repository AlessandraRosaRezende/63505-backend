const soma = (...numeros) => {
  if (numeros.length === 0) return 0;
  // if (!num1 && !num2) return 0;
  let validInput = numeros.every((num) => typeof num === 'number');
  if (!validInput) return null;
  // if (typeof num1 !== 'number' || typeof num2 !== 'number') return null;

  return numeros.reduce((acc, curr) => acc + curr, 0);
  // return num1 + num2;
};

// const soma = (...numeros) => {
//   if (numeros.length === 0) return 0;
//   let validInput = true;
//   for (let index = 0; index < numeros.length && validInput; index++) {
//     if (typeof numeros[index] !== 'number') validInput = false;
//   }

//   if (!validInput) return null;
//   let resultado = 0;
//   for (let index = 0; index < numeros.length; index++) {
//     resultado += numeros[index];
//   }
//   return resultado;
// };

let testesAprovados = 0;
let testesTotais = 4;

// Teste 1
console.log('Teste 1: A função deve retornar nulo se algum parâmetro não for numérico');
let resultadoTeste1 = soma("2", 2);
if (resultadoTeste1 === null) {
  console.log('Teste 1 passou');
  testesAprovados++;
} else console.log(`Falha no teste 1, esperava 'null' mas recebi ${typeof resultadoTeste1}`);

// Teste 2
console.log('Teste 2: A função deve retornar 0 se nenhum parâmetro for passado');
let resultadoTeste2 = soma();
if (resultadoTeste2 === 0) {
  console.log('Teste 2 passou');
  testesAprovados++;
} else console.log(`Falha no teste 2, esperava '0' mas recebi ${typeof resultadoTeste2}`);

// Teste 3
console.log('Teste 3: A função deve ser capaz de fazer a soma corretamente');
let resultadoTeste3 = soma(2, 3);
if (resultadoTeste3 === 5) {
  console.log('Teste 3 passou');
  testesAprovados++;
} else console.log(`Falha no teste 3, ${typeof resultadoTeste3} recebido, mas esperava 5`);

// Teste 4
console.log('Teste 4: A função deve ser capaz de fazer a soma com qualquer número de parâmetros');
let resultadoTeste4 = soma(1, 2, 3, 4, 5);
if (resultadoTeste4 === 15) {
  console.log('Teste 4 passou');
  testesAprovados++;
} else console.log(`Falha no teste 4, ${typeof resultadoTeste4} recebido, mas esperava 15`);
