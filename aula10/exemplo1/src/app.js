const express = require('express');
const _dirname = require('./utils');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/view.router');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const socketServer = new Server(server);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', _dirname + '/views');

app.use(express.static(_dirname + '/public'));

app.use('/', viewsRouter);

socketServer.on('connection', (socket) => {
  console.log('Novo cliente conectado!');

  socket.on('disconnect', () => {
    console.log('Cliente desconectado!');
  });

  socket.on('message', (message) => {
    console.log(message);
  });

  socket.emit('event_individual', 'Esta mensagem deve ser recebida pelo socket cliente');

  socketServer.emit('hello', 'Olá, cliente!');
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
})