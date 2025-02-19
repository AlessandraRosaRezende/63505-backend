const logger = require('../utils/logger');

const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} na ${req.url} - ${new Date().toLocaleTimeString()}`);
  next();
};

module.exports = addLogger;