// const exponencial = Math.pow(2,3);
// console.log(exponencial);

const exponencial = 2**3;
console.log(exponencial);

const array = [1, 2, 3];

console.log(array.includes(2, 2));

const arrayNames = ['Alessandra', 'Leonardo', 'João', 'Maria'];

console.log(arrayNames.includes('John'));

const filteredArray = arrayNames.filter(name => name.length >= 4);

console.log(filteredArray);

const mappedArray = arrayNames.map(name => name.toUpperCase());

console.log(mappedArray);

// High Order Functions - HOFs