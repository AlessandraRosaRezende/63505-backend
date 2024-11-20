const moment = require('moment');

const main = () => {
  const data = moment();
  const dataNascimento = moment('09/15', 'DD/MM/YYYY');

  // depois muda a versão para 1.6.0 para ver o erro acontecendo!!!
  if (!dataNascimento.isValid()) {
    console.log('Data não é válida');
    process.exit(1)
  }

  const year = data.diff(dataNascimento, 'years');
  const month = data.diff(dataNascimento, 'months');
  const day = data.diff(dataNascimento, 'days');

  console.log(`Idade aproximada: ${year} anos, ${month} meses, ${day} dias`);
}

main()