const { somar, dividir, multiplicar, subtrair} = require('./operacoesMath');

console.log(somar(1, 2)); // 3
console.log(dividir(4, 2)); // 2
console.log(multiplicar(2, 2)); // 4
console.log(subtrair(4, 2)); // 2
console.log(dividir(4, 0)); // Não é possível dividir por zero
console.log(multiplicar(4, 0)); // Qualquer número multiplicado por 0 é 0