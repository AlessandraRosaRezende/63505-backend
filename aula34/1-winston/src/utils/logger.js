const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'http'}),
    new winston.transports.File({ filename: 'error.log', level: 'info' }),
  ]
});

module.exports = logger;