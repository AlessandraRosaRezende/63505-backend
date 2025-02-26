const express = require('express');
const usersRouter = require('./routes/userRouter');

const app = express();

app.use('/api/users', usersRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});