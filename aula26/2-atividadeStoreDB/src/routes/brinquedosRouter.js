const express = require('express');
const router = express.Router();
const brinquedoController = require('../controllers/brinquedosController');

router.get('/', brinquedoController.getBrinquedos);
router.get('/:id', brinquedoController.getBrinquedoById);
router.post('/', brinquedoController.postBrinquedo);
router.put('/:id', brinquedoController.updateBrinquedo);
router.delete('/:id', brinquedoController.deleteBrinquedo);

module.exports = router;