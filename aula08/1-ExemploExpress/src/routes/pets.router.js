const express = require('express');

const router = express.Router();

// configura para interpretar solicitações com dados codificados no formato URL
router.use(express.urlencoded({ extended: true }))

let pets = [];

// /api/pets/
router.get('/', (req, res) => {
  return res.status(200).json(pets);
});

router.post('/', (req, res) => {
  try {
    const novoPet = req.body;
    pets.push(novoPet);
    return res.status(201).json(novoPet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o pet' });
  }
})

module.exports = router;