function soma(a, b) {
    return a + b;
};

const soma2 = (a, b) => a + b;

const imprime = nome => console.log(nome);

function imprimeArgs() {
    console.log(arguments);
}

imprimeArgs(1, 2, 3, 4, 5);

const showArgs = () => console.log(arguments);

showArgs(1, 2, 3, 4, 5);