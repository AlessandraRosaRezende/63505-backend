const login = require('./login');

// Teste 1: senha vazia
console.log('Teste 1: deve retornar "Sem senha fornecida" para senha vazia');
let resultadoTeste1 = login('coderUser', '');
if (resultadoTeste1 === 'Sem senha fornecida') {
  console.log('Passou no teste 1');
} else {
  console.log('Teste 1 não passou. Esperava "Sem senha fornecida" mas recebeu: ', resultadoTeste1);
}

// Teste 2: usuário vazio
console.log('Teste 2: deve retornar "Nenhum usuário fornecido" quando usuário não for informado');
let resultadoTeste2 = login('', '123');
if (resultadoTeste2 === 'Nenhum usuário fornecido') {
  console.log('Passou no teste 2');
} else {
  console.log('Teste 2 não passou. Esperava "Nenhum usuário fornecido" mas recebeu: ', resultadoTeste2);
}

// Teste 3: Senha errada
console.log('Teste 3: A função deve retornar "Senha Errada" se a senha estiver incorreta');
let resultadoTeste3 = login('coderUser', 'wrongPassword');
if (resultadoTeste3 === 'Senha Errada') {
  console.log('Teste 3 passou');
} else {
  console.log(`Falha no teste 3, recebeu "${resultadoTeste3}", mas esperava "Senha Errada"`);
}

// Teste 4: Usuário errado
console.log('Teste 4: A função deve retornar "Credenciais incorretas" se o usuário estiver incorreto');
let resultadoTeste4 = login('wrongUser', '123');
if (resultadoTeste4 === 'Credenciais incorretas') {
  console.log('Teste 4 passou');
} else {
  console.log(`Falha no teste 4, recebeu "${resultadoTeste4}", mas esperava "Credenciais incorretas"`);
}

// Teste 5: Credenciais corretas
console.log('Teste 5: A função deve retornar "conectado" se o usuário e a senha estiverem corretos');
let resultadoTeste5 = login('coderUser', '123');
if (resultadoTeste5 === 'conectado') {
  console.log('Teste 5 passou');
} else {
  console.log(`Falha no teste 5, recebeu "${resultadoTeste5}", mas esperava "conectado"`);
}