// Importando o módulo bcrypt para criptografia de passwords
const bcrypt = require('bcrypt');

// Função para criar hash de password
const createHash = (password) => {
  // Gerando um hash síncrono usando a password fornecida e um salt (valor aleatório) com custo 10
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

// Função para validar password
const isValidPassword = (password, userPassword) => bcrypt.compareSync(password, userPassword);

// Exportando as funções necessárias para serem usadas em outros arquivos
module.exports = { createHash, isValidPassword };