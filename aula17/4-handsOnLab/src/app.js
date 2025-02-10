const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./routes/user.router'); 
const userModel = require('./models/user.model');

const pathView = path.join(`${__dirname}/views`);

const app = express();

app.engine('handlebars', engine({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', 'handlebars');
app.set('views', pathView);

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCoder');
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
  }
  
  await userModel.insertMany([
    {
      first_name: "Joao",
      last_name: "Silva",
      email: "teste1@teste.com",
      gender: "Masc",
      grade: 8,
      group: "1A"
    },
    {
      first_name: "Julia",
      last_name: "Silva",
      email: "teste2@teste.com",
      gender: "Fem",
      grade: 9,
      group: "1A"
    },
    {
      first_name: "Gabi",
      last_name: "Silva",
      email: "teste3@teste.com",
      gender: "Fem",
      grade: 10,
      group: "1B"
    },
    {
      first_name: "Ana",
      last_name: "Silva",
      email: "teste4@teste.com",
      gender: "Fem",
      grade: 8,
      group: "1B"
    },
    {
      first_name: "Guilherme",
      last_name: "Soares",
      email: "gui@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 10,
      group: "1A"
    },
    {
      first_name: "Ale",
      last_name: "Rezende",
      email: "alerezende@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 8,
      group: "1B"
    },
    {
      first_name: "Ana",
      last_name: "Maria",
      email: "anamaria@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 5,
      group: "1A"
    },
    {
      first_name: "Pedro",
      last_name: "Silva",
      email: "pedro@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 7,
      group: "1B"
    },
    {
      first_name: "Lucas",
      last_name: "Pereira",
      email: "lucas@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 6,
      group: "1A"
    },
    {
      first_name: "Julia",
      last_name: "Santos",
      email: "julia@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 10,
      group: "1B"
    },
    {
      first_name: "Carlos",
      last_name: "Oliveira",
      email: "carlos@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 2,
      group: "1A"
    },
    {
      first_name: "Fernanda",
      last_name: "Costa",
      email: "fernanda@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 9,
      group: "1B"
    },
    {
      first_name: "Rafael",
      last_name: "Melo",
      email: "rafael@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 4,
      group: "1A"
    },
    {
      first_name: "Camila",
      last_name: "Ferreira",
      email: "camila@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 8,
      group: "1B"
    },
    {
      first_name: "Bianca",
      last_name: "Alves",
      email: "bianca@gmail.com",
      password: "123456",
      gender: "Fem",
      grade: 10,
      group: "1A"
    },
    {
      first_name: "Thiago",
      last_name: "Rodrigues",
      email: "thiago@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 8,
      group: "1B"
    },
    {
      first_name: "Roberto",
      last_name: "Martins",
      email: "roberto@gmail.com",
      password: "123456",
      gender: "Masc",
      grade: 8,
      group: "1A"
    }
  ]);
};

connect();

app.use('/students', userRouter);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
