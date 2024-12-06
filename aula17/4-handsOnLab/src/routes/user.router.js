const express = require('express');
const studentModel = require('../models/user.model'); // Importa o modelo do aluno

// Cria um roteador
const router = express.Router();

// Define a rota GET para listar os alunos
router.get('/', async (req, res) => {
  const page = req.query.page || 1; // Número da página (padrão: 1)

  try {
    // Paginação dos alunos
    const alunos = await studentModel.paginate({}, { page, limit: 10 }); // Limite de 10 alunos por página

    // Renderiza a página com os dados paginados
    res.render('index', {
      alunos: alunos.docs,
      page: alunos.page,
      totalPages: alunos.totalPages,
      prevPage: alunos.hasPrevPage ? alunos.prevPage : null,
      nextPage: alunos.hasNextPage ? alunos.nextPage : null,
    });
    console.log("Alunos:", alunos);
  } catch (err) {
    // Trata erros
    console.error('Erro ao buscar e paginar alunos:', err);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;
