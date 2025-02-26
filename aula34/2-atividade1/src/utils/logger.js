const winston = require('winston');

const devLogger = winston.createLogger({
  level: 'verbose',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'nadaserio.log', level: 'verbose' }),
  ]
});

const prodLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ level: 'http' }),
    new winston.transports.File({ filename: 'error.log', level: 'warn' }),
  ]
});

module.exports = {
  devLogger,
  prodLogger,
};