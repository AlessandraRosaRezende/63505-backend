const jwt = require('jsonwebtoken');

const PRIVATE_KEY = 'minhachavesupersecreta';

// gera token
const generateToken = (user) => {
  const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: '1h' });
  return token;
};

// middleware para validar token
const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Token não informado' });
  }
  console.log(authHeader);

  const token = authHeader.split(' ')[1]; // retirar a palavra reservada Bearer

  jwt.verify(token, PRIVATE_KEY, (err, credentials) => {
    if (err) {
      console.log(err);
      return res.status(403).send({ message: 'Token inválido' });
    }

    console.log('CREDENTIALS', credentials);
    req.user = credentials;

    next();
  })
}

module.exports = { generateToken, authToken };