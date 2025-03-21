const fs = require('fs');

const date = JSON.stringify(new Date());

// console.log(date);

// `&{date}`, date.toString() 

fs.writeFile('./data/dataHora.txt', date, (err) => {
  if (err) {
    return console.log('Erro: ', err);
  }

  fs.readFile('./data/dataHora.txt', 'utf-8', (err, resultado) => {
    if (err) {
      return console.log('Erro: ', err);
    }
    console.log(resultado);
  })
})