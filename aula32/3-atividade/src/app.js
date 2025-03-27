const express = require('express');
const usersRouter = require('./routes/userRouter');
const errorHandler = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});