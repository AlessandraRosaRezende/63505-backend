const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('CoderSecret'));

app.get('/setCookie', (req, res) => {
  // console.log('req: ', req);
  // console.log('res: ', res);
  res.cookie('SignedCookie', 'Esse é um cookie muito poderoso', { maxAge: 100000, signed: true}).send('Cookie assinado e setado com sucesso');
});

app.get('/getCookie', (req, res) => {
  res.send(req.signedCookies);
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('CoderCookie').send('Cookie deletado com sucesso');
});

app.listen(8080, () => {
  console.log('Rodando na porta 8080');
})