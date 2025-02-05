require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();

const transport = nodemailer.createTransport({
  service: 'Gmail',
  port: 587,  
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_ACCOUNT_TOKEN);

const mailJuan = 'juanpedro_0@hotmail.com';
const mailLeticia = 'leticiaschiavon20@gmail.com';

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/mail', async (req, res) => {
  let result = await transport.sendMail({
    from: `Coder Tests <${process.env.EMAIL}>`,
    to: `email para onde será enviado <${mailJuan}>`,
    cc: `email para onde será enviado <${mailLeticia}>`,
    subject: 'Teste de envio de email',
    html: `
      <div>
        <h1>Teste de envio de e-mail</h1>
        <p>Este é um e-mail de teste enviado pelo Node.js.</p>
        <img src="cid:imgbob"/>
      </div>`,
    attachments: [{
      filename: 'bob.jpg',
      path: __dirname + '/images/bob.jpg',
      cid: 'imgbob'
    }]
  });
  return res.send({ status: "success", result: 'email sent' });
})

app.get('/sms', async (req, res) => {
  const { name, product } = req.query;
  let result = await client.messages.create({
    to: '+5531992782642',
    from: process.env.TWILIO_SMS_NUMBER,
    // body: 'Teste de envio de SMS pelo Node.js'
    body: `Obrigado, ${name}! Seu pedido de ${product} foi recebido com sucesso!`
  });
  return res.send({ status: "success", result: `sms sent: ${result.body}` });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})