const express = require('express');
const handlebars = require('express-handlebars');
const _dirname = require('./utils');
const viewsRouter = require('./routes/views.router');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', _dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(_dirname + '/public'));


app.use('/', viewsRouter);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});