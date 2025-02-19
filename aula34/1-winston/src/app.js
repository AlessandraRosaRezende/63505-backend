const express = require('express');
const logMid = require('./middleware/logMid');

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
  req.logger.info('Rota inicial - no info');
  req.logger.warn('Rota inicial - no warn');
  req.logger.error('Rota inicial - no error');
  res.send('Hello, world!');
});

app.listen(8080, () => console.log('App listening on port 8080!'));