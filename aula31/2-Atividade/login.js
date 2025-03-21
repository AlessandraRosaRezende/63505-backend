function login(username, password) {
  if (!password) {
    return 'Sem senha fornecida';
  }

  if (!username) {
    return 'Nenhum usuário fornecido';
  }

  if (password !== '123') {
    return 'Senha Errada';
  }

  if (username !== 'coderUser') {
    return 'Credenciais incorretas';
  }

  return 'conectado';
}

module.exports = login;