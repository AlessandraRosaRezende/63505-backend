const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosDobrados = numeros.map(function (numero) {
//   return numero * 2; // este é o meu callback
// });

const numerosDobrados = numeros.map((numero) => numero * 2); //callback
console.log(numerosDobrados);

const somar = (a, b) => a + b;
const subtrair = (b, a) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (batatinha, xablau, operacao) => {
  console.log(`Estamos executando a operação ${operacao}`);

  return operacao(batatinha, xablau)
};

console.log(calculadora(1, 2, subtrair));