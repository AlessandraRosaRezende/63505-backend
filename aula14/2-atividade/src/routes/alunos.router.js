const express = require('express');
const alunosModel = require('../models/alunos.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let alunos = await alunosModel.find();
    res.send({ result: 'success', payload: alunos });
  } catch (error) {
    console.log("Erro ao buscar aluno com mongoose: " + error);
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
});

router.post('/', async (req, res) => {
  try {
    let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;
    if (!nome || !sobrenome || !idade || !dni || !curso || !nota || !email) {
      return res.status(400).json({ status: 'error', error: 'Dados faltando' });
    }

    let result = await alunosModel.create({ nome, sobrenome, idade, dni, curso, nota, email });
    res.status(201).json({ status: 'Aluno adicionado com sucesso', payload: result });
  } catch (error) {
    console.log("Erro ao adicionar aluno com mongoose: " + error);
    res.status(500).json({ error: 'Erro ao adicionar aluno' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let { nome, sobrenome, idade, dni, curso, nota, email } = req.body;

    let alunoToUpdate = await alunosModel.findById(id);
    if (!alunoToUpdate) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    alunoToUpdate.nome = nome || alunoToUpdate.nome;
    alunoToUpdate.sobrenome = sobrenome || alunoToUpdate.sobrenome;
    alunoToUpdate.idade = idade || alunoToUpdate.idade;
    alunoToUpdate.dni = dni || alunoToUpdate.dni;
    alunoToUpdate.curso = curso || alunoToUpdate.curso;
    alunoToUpdate.nota = nota || alunoToUpdate.nota;
    alunoToUpdate.email = email || alunoToUpdate.email;

    let updatedAluno = await alunoToUpdate.save();
    res.status(200).json({ status: 'success', payload: updatedAluno });
  } catch (error) {
    console.log("Erro ao atualizar aluno com mongoose: " + error);
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let alunoToDelete = await alunosModel.findById(id);
    if (!alunoToDelete) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    await alunoToDelete.deleteOne();
    res.status(204).send();
  } catch (error) {
    console.log("Erro ao deletar aluno com mongoose: " + error);
    res.status(500).json({ error: 'Erro ao deletar aluno' });
  }
});

module.exports = router;