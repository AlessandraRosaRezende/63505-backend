const { devLogger, prodLogger } = require('../utils/logger');
const dotenv = require('dotenv').config();

console.log(process.env.NODE_ENV);

const addLog = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    req.logger = devLogger;
  } else {
    req.logger = prodLogger;
  }
  req.logger.http(`${req.method} ${req.path}`);
  next();
};

module.exports = addLog;