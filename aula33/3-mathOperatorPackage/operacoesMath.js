module.exports = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => (a != 0 && b != 0) ? a * b : 'Qualquer número multiplicado por 0 é 0',
  dividir: (a, b) => (b !== 0) ? a / b : 'Não é possível dividir por zero'
}