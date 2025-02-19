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

app.get("/simpleOperation", (req, res) => {
  req.logger.info("to no simpleOperation");

  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

app.get("/complexOperation", (req, res) => {
  req.logger.info("to no complexOperation");
  req.logger.warn("warning!!!!!!!");

  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

app.listen(8080, () => {
  console.log('App listening on port 8080');
});

// artillery quick --count 40 --num 50 http://localhost:8080/simpleOperation -o simple.json
// artillery quick --count 40 --num 50 http://localhost:8080/complexOperation -o complex.json