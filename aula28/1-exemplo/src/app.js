const dotenv = require('dotenv').config();
const express = require('express');
const contactsRouter = require('./routes/contacts.router');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connection = mongoose.connect(process.env.MONGO_URL);

app.use('/contacts', contactsRouter);

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
})