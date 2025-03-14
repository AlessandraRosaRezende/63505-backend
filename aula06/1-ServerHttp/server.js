const http = require('http');

const server = http.createServer((req, res) => {
  res.end('My first Hello World from http server - agora com alteracoes - e com nodemon');
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
})