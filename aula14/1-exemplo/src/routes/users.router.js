const express = require('express');
const usersModel = require('../models/users.model');

const router = express.Router();

router.get('/', async (req, res) => { 
  try {
    const users = await usersModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    
    if (!first_name || !email) {
      return res.status(400).json({ message: 'Faltam dados' });
    }

    const newUser = await usersModel.create({ first_name, last_name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { first_name, last_name, email } = req.body;

    const userToUpdate = await usersModel.findById(id);

    if (!userToUpdate) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    userToUpdate.first_name = first_name || userToUpdate.first_name;
    userToUpdate.last_name = last_name || userToUpdate.last_name;
    userToUpdate.email = email || userToUpdate.email;

    const userUpdated = await userToUpdate.save();
    res.status(200).json(userUpdated);    
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const userToDelete = await usersModel.findById(id);

    if (!userToDelete) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    await userToDelete.deleteOne();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
});

module.exports = router;