const express = require('express');
const { getUsers, getUserById, createUser, updateUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getUsers);
router.get('/:uid', getUserById);
router.post('/', createUser);
router.put('/:uid', updateUser)

module.exports = router;