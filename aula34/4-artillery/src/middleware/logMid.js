const { prodLog, devLog } = require('../utils/logger');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.NODE_ENV);

const addLogger = (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    req.logger = prodLog;
  } else {
    req.logger = devLog;
  }
  req.logger.info(`${req.method} na ${req.url} - ${new Date()}`);
  next();
};

module.exports = addLogger;