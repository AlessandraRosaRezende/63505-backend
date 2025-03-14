const express = require('express');
const petController = require('../controllers/pets.controller')

const router = express.Router();

// /api/pets/
router.get('/', petController.getPets);

router.post('/', petController.postPets)

module.exports = router;