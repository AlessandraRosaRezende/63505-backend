const express = require('express');
const _dirname = require('./utils');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

// servidor para sockets dentro do servidor http
const socketServer = new Server(server);

// configurações dos templates
app.engine('handlebars', handlebars.engine());
app.set('views', _dirname + '/views');
app.set('view engine', 'handlebars');

// static
app.use(express.static(_dirname + '/public'));

app.use('/', viewsRouter);

// Array para armazenar as mensagens enviadas pelos usuários
let messages = [];

socketServer.on('connection', (socket) => {
  // Imprime uma mensagem no console quando um usuário se conecta
  console.log("Usuário conectado");
  // Ouve os eventos de mensagem enviados pelos clientes
  socket.on("message", (message) => {
    // Imprime as mensagens recebidas no console do servidor
    console.log('Mensagem recebida:', messages);
    // Cria um objeto contendo o ID do socket e a mensagem enviada
    const data = {
      socketid: socket.id,
      message: message
    };
    // Adiciona a nova mensagem ao array de mensagens
    messages.push(data);
    console.log('Mensagens recebidas atualizadas:', messages);

    // Emite a lista de mensagens atualizada para todos os clientes
    // socket.emit('message', messages);
    
    // Emite a lista de mensagens atualizada para todos os clientes
    socketServer.emit('message', messages);
    
    // Emite a mensagem recebida para todos os clientes, exceto o remetente
    // socket.broadcast.emit('message', messages); 
  });
  // Ouve o evento de desconexão do cliente
  socket.on('disconnect', () => {
    // Imprime uma mensagem no console quando um usuário se desconecta
    console.log('Usuário desconectado');
    messages = []
  });
});
// Inicia o servidor HTTP na porta 8080
server.listen(8080, () => {
  // Imprime uma mensagem no console quando o servidor começa a ouvir
  console.log("Servidor iniciado na porta 8080");
});