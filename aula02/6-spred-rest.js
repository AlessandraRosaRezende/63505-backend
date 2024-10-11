const coder = {
  nome: "Turma 63505",
  aulas: "Terça e quinta",
  professora: "Alessandra"
};

let alunos = {
  nomeAluna: "Maria",
  estado: "Piauí",
  aulas: "Quarta e sexta"
}

let objUnico = {...coder, ...alunos};
console.log(objUnico);

const nomeAluna2 = 'Cláudia';

objUnico = {...alunos, nomeAluna2}; 
console.log(objUnico);

const {aulas, ...alunosSemAulas} = alunos;
const {nomeAluna, ...alunosSemNome } = alunos;

console.log(alunosSemAulas);
console.log(alunosSemNome);

// spread operator e rest parameter