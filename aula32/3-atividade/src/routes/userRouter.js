const { Router } = require('express');
const CustomError = require('../services/errors/CustomError');
const { invalidParamErrorInfo, notFoundParamErrorInfo, generateUserErrorInfo } = require('../services/errors/info');
const EErrors = require('../services/errors/enums');

const users = [];

const router = Router();

router.get('/', (req, res) => {
  res.send({ status: 'success', payload: users });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id, 10);

  if (isNaN(idNumber) || idNumber < 0) {
    const error = CustomError.createError({
      name: 'InvalidParamError',
      message: 'Parâmetro inválido',
      cause: invalidParamErrorInfo(id),
      code: EErrors.INVALID_PARAM,
    });
    return res.send({ status: 'erro', payload: error });
  }
  console.log(idNumber);
  const user = users.find((user) => user.id === idNumber);

  if (!user) {
    const error = CustomError.createError({
      name: 'NotFoundParamError',
      message: 'Parâmetro não existe',
      cause: notFoundParamErrorInfo(id),
      code: EErrors.NOT_FOUND_PARAM,
    });
    return res.send({ status: 'erro', payload: error });
  }

  res.send({ status: 'success', payload: user });
});

router.post('/', (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    const error = CustomError.createError({
      name: "User creation error",
      cause: generateUserErrorInfo({ first_name, last_name, email }),
      message: "Erro tentando criar usuário",
      code: EErrors.INVALID_TYPES_ERROR
    })
    return res.send({ status: 'erro', payload: error })
  };

  const user = {
    first_name,
    last_name,
    email
  };

  if (users.length === 0) {
    user.id = 1
  } else {
    user.id = users[users.length - 1].id + 1;
  }
  users.push(user);
  res.send({ status: 'success', payload: user })
});

module.exports = router;