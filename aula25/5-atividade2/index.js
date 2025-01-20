// recebe uma lista de argumentos
// se forem todos números, retorna  os números
// se receber algum parâmetro que não seja número, retorna o tipo dos parâmetros
// ex: (1, 2, 3) => 1, 2, 3
// ex: (1, 2, 'a', true) => number, number, string, boolean

function listNumers(...numbers) {
  const types = numbers.map((value) => typeof value);

  const isValidTypes = types.filter(type => type !== 'number');

  if (isValidTypes.length > 0) {
    const formattedTypes = types.map((type) => type === 'number' ? type : `'${type}'`);
    console.error(`Os tipos dos parâmetros são: ${formattedTypes.join(', ')}`);
    process.exitCode = 9;
  } else {
    console.log('Lista dos parâmetros:', numbers.join(', '));
    process.exitCode = 0;
  }
}

process.on('exit', (code) => {
  if (code === 9) {
    console.log('Processo encerrado devido a parâmetro inválido na função.', code);
  } else {
    console.log('Processo encerrado com sucesso.', code);
  }
});

listNumers(1, 2, 3);
// listNumers(1, 2, 'a', true);