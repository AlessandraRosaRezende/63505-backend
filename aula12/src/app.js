const express = require('express');
const upload = require('./utils');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let usuarios = [];

function salvarUsuario(usuario) {
  if (fs.existsSync('usuarios.json')) {
    const data = fs.readFileSync('usuarios.json');
    usuarios = JSON.parse(data);
  }

  usuarios.push(usuario);
  return fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));
}

app.post('/upload', upload.single('file'), (req, res) => {
  const { nome, sobrenome } = req.body;
  console.log(req.file);

  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado!');
  }

  const usuario = { nome, sobrenome, imagem: req.file.originalname };

  salvarUsuario(usuario);

  return res.send(`Usuário ${nome} ${sobrenome} cadastrado com sucesso! Imagem: ${req.file.originalname}`);
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});