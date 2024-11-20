const { Router } = require('express');

const router = Router();

let users = [];

// /api/users/
router.get('/', (req, res) => {
  return res.status(200).json(users);
});

router.post('/', (req, res) => {
  try {
    const novoUser = req.body;
    users.push(novoUser);
    return res.status(201).json(novoUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o user'});
  }
})

module.exports = router;