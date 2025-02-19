const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/connection');
const sessaoRoutes = require('./routes/sessao');
const {faker} = require('@faker-js/faker');
const { hashSenha } = require('./utils/hashSenha');
const Usuario = require('./models/Usuario');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connection();

const PORT = process.env.PORT || 8080;

app.use('/api/sessao', sessaoRoutes);
app.get('/gerar-usuario-teste', async (req, res) => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    console.log(`Gerando usuário de teste: nome=${nome}, sobrenome=${sobrenome}, email=${email}, senha=${senha}`);

    try {
        const hashedPassword = await hashSenha(senha);
        const usuarioTeste = new Usuario({
            nome,
            sobrenome,
            email,
            senha: hashedPassword
        });

        await usuarioTeste.save();

        res.json({ nome, sobrenome, email, senha });
    } catch (err) {
        console.error(`Erro ao gerar usuário de teste: ${err.message}`);
        res.status(500).json({ msg: 'Erro ao gerar usuário de teste' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



// artillery run config.yml --output testPerformance.json
// artillery report testPerformance.json -o testResults.html

// artillery run config.yml --record --key API_KEY_ARTILLERY 