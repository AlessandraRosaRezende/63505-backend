const socket = io();

console.log('Conectado com websocket')

// Obtém referências aos elementos DOM relevantes
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const messageList = document.getElementById('messageList');

// Adiciona um ouvinte de evento de clique ao botão de envio de mensagem
sendMessageButton.addEventListener('click', () => {
  // Obtém o valor do campo de entrada de texto
  const message = messageInput.value.trim();
  // Verifica se a mensagem não está vazia
  if (message !== '') {
    // Envia a mensagem para o servidor com o evento 'message'
    socket.emit('message', message);
    // Limpa o campo de entrada de texto
    messageInput.value = '';
    console.log("Mensagem enviada no chat em tempo real");
  }
});

// Ouve o evento 'message' enviado pelo servidor
socket.on('message', (messages) => {
  // Limpa a lista de mensagens
  messageList.innerHTML = '';
  // Itera sobre as mensagens recebidas do servidor
  messages.forEach(data => {
    // Cria um elemento <li> para cada mensagem e adiciona à lista de mensagens
    const listItem = document.createElement('li');
    // Define o texto da mensagem incluindo o ID do socket e a mensagem
    listItem.textContent = `${data.socketid}: ${data.message}`;
    // Adiciona o elemento <li> à lista de mensagens
    messageList.appendChild(listItem);

  });
});

// Ouve o evento 'input' no campo de entrada de texto
messageInput.addEventListener('input', (event) => {
  // Envia uma mensagem de digitação para o servidor com o evento 'typing'
  socket.emit('typing', event.target.value);
  console.log("Usuário digitando mensagem");
});

// Ouve o evento 'typing' enviado pelo servidor
socket.on('typing', (message) => {
  // Imprime a mensagem de digitação no console
  console.log(message);
});