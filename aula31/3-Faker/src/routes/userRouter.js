const { Router } = require('express');
const { generateUsers } = require('../utils');

const router = Router();

router.get('/', (req, res) => {
  let users = [];

  for (let i = 0; i < 10; i++) {
    users.push(generateUsers());
  }

  return res.send({ status: 200, payload: users });
});

module.exports = router;