const express = require('express');
const userRouter = require('./routes/user.router');
const businessRouter = require('./routes/business.router');
const orderRouter = require('./routes/orders.router');

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', orderRouter);


app.listen(8080, () => {
  console.log(`SERVIDOR RODANDO NA PORTA 8080`);
})