const express = require('express');
const contactsRouter = require('./routes/contacts.router');

const app = express();
app.use(express.json());

app.use('/contacts', contactsRouter);

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
})