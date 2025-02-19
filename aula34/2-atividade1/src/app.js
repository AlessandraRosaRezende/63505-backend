const express = require('express');
const logMid = require('./middleware/logMid');

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
  req.logger.warn('Rota inicial - no warn');
  req.logger.error('Rota inicial - no error');
  req.logger.http('Rota inicial - no http');
  res.send('Hello, world!');
});

app.listen(8080, () => console.log('App listening on port 8080!'));