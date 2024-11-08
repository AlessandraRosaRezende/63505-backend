const { Router } = require('express');
const usersController = require('../controllers/users.controller')

const router = Router();

// /api/users/
router.get('/', usersController.getUser);

router.post('/', usersController.postUser)

module.exports = router;