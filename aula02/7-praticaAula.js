const obj = [
  { macas: 3, peras: 2, carne: 1, frango: 5, doces: 2 }, 
  { macas: 1, cafes: 1, ovos: 6, frango: 1, paes: 4 }
];

const lista = [];

obj.forEach((item) => {
  const chaves = Object.keys(item);
  for (const chave of chaves) {
    if (!lista.includes(chave)) {
      lista.push(chave);
    }
  }
});
console.log(lista);

let totalVendido = 0;

for (const value of obj) {
  const values = Object.values(value);
  for (const val of values) {
    totalVendido = totalVendido + val;
  }
}

console.log(totalVendido);