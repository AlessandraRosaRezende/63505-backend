const express = require('express');
const router = express.Router();
const { getProfile, togglePremium, changeRole } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, getProfile);
router.get('/premium/:uid', authMiddleware, adminMiddleware, togglePremium);
router.put('/premium/:uid', authMiddleware, adminMiddleware, changeRole);

module.exports = router;