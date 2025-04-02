const express = require('express');
const handlebars = require('express-handlebars');
const _dirname = require('./utils');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', _dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(_dirname + '/public'));

app.get('/', (req, res) => {
  console.log('teste');

  const userObj = {
    name: 'João',
    last_name: 'Silva'
  }
  res.render('user', userObj);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});