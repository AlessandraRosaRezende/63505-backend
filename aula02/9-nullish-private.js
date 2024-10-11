const taxaContrato = 0;
// usado para sempre deixar um valor default
const variavelPreenchida = taxaContrato || "Sem Valor";

console.log(variavelPreenchida);

// aceita zero como valor
const variavelNullish = taxaContrato ?? "Sem Valor 2";

console.log(variavelNullish);


class Persona {
  #fullname; // atributo privado
  idade = 25; // atributo publico
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#fullname = `${this.nome} ${this.sobrenome}`;
  }
  getFullName = () => this.#fullname; // metodo de classe
}

const pessoa1 = new Persona("Alessandra", "Nascimento");
console.log(pessoa1.getFullName());
pessoa1.idade = 35;
console.log(pessoa1.idade);