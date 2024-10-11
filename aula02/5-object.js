const coder = {
  nome: "Turma 63505",
  aulas: "Terça e quinta",
  professora: "Alessandra"
};
console.log(coder);

const chaveValor = Object.entries(coder);
console.log(chaveValor);
console.log(chaveValor[0][1]);

const keys = Object.keys(coder);
console.log(keys);

const values = Object.values(coder);
console.log(values);