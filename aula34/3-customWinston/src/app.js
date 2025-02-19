const express = require('express');
const logMid = require('./middleware/logMid');

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
  req.logger.warn('Alerta!!!')
  req.logger.info('Informação')
  req.logger.fatal('Fatal')
  res.send('Teste de logger');
});

app.listen(8080, () => {
  console.log('App listening on port 8080');
});