// console.log("Tarefa Iniciada!");
// console.log("Executando...");

// for (let index = 0; index <= 5; index++) {
//   console.log(index);
// }

// console.log("Tarefa Terminada!");

const contador = () => {
  let counter = 1;
  console.log("Executando...");
  let timer = setInterval(() => {
    console.log(counter++);
    if (counter > 5) {
      clearInterval(timer);
    }
  }, 2000);
};

let operacao = () => console.log("Executando...");

console.log("Tarefa Iniciada!");
contador();
console.log("Tarefa Terminada!");

let x;
x = 5
console.log(x);

x = 10
console.log(x);
