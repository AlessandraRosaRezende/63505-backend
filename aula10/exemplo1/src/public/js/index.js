const socket = io(); // io = socket.io

console.log('Olá, eu estou me comunicando com o servidor a partir de um WebSocket!');

socket.emit('message', 'Olá, servidor!');
socket.emit('message', 'Tudo bem?');

socket.on('event_individual', (message) => {
  console.log(message);
});

socket.on('hello', (message) => {
  console.log(message);
});