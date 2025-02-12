const generateUserErrorInfo = (user) => {
  return `Alguma propriedade não foi informada.
  Lista de propriedades requeridas:
  * first_name  : precisa ser uma string, informado ${user.first_name}
  * last_name   : precisa ser uma string, informado ${user.last_name}
  * email       : precisa ser uma string, informado ${user.email}`
}

const invalidParamErrorInfo = (param) => {
  return `O parâmetro ${param} é inválido.`
};

const notFoundParamErrorInfo = (param) => {
  return `O parâmetro ${param} não foi encontrado.`
};

module.exports = {
  generateUserErrorInfo,
  invalidParamErrorInfo,
  notFoundParamErrorInfo
};