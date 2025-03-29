const EErrors = require('../services/errors/enums');

module.exports = (err, req, res, next) => {
  if (err.cause) {
    console.log(err.cause);
  } else {
    console.log(err);
  }

  switch (err.code) {
    case EErrors.INVALID_PARAM:
      res.status(400).send({ status: 'error', message: 'Parâmetro inválido' });
      break;
    case EErrors.NOT_FOUND_PARAM:
      res.status(404).send({ status: 'error', message: 'Parâmetro não existe' });
      break;
    case EErrors.INVALID_TYPES_ERROR:
      res.status(400).send({ status: 'error', message: 'Algum campo não foi informado' });
      break;
    default:
      res.status(500).send({ status: 'error', message: 'Internal server error' });
      break;
  }
};