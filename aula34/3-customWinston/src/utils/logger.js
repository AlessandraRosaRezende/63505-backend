const winston = require('winston');

const customLevelsOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
  },
  colors: {
    fatal: 'red',
    error: 'orange',
    warn: 'yellow',
    info: 'blue',
    debug: 'white'
  },
};

const devLog = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({
      level: 'warning',
      format: winston.format.combine(
        winston.format.colorize({ colors: customLevelsOptions.colors }),
        winston.format.simple()
      )
    }),
    new winston.transports.Console({ level: 'info', format: winston.format.simple() })
  ]
});

const prodLog = winston.createLogger({
  levels: customLevelsOptions.levels,
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ colors: customLevelsOptions.colors }),
        winston.format.simple()
      )
    }),
    new winston.transports.File({ filename: './errors.log', level: 'warn', format: winston.format.simple() })
  ]
});
module.exports = {
  devLog,
  prodLog
};