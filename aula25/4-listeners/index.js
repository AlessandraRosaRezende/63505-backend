process.on('exit', (code) => {
  console.log('Este processo será executado imediatamente antes da saída do processo Node.js com o código: ', code)
})

process.on('uncaughtException', exception => {
  console.log('Este processo será executado imediatamente quando ocorrer uma exceção não tratada.', exception)
  process.exit(1)
})

process.on('message', message => {
  console.log('Este processo será executado imediatamente após receber a mensagem de outro processo', message)
})

// console.log('hello world');
console('hello world');

// 0 - processo encerrado normalmente
// 1 - processo encerrado com erro
// 5 - processo encerrado com erro fatal do V8
// 9 - processo encerrado com erro de argumentos inválidos em tempo de execução