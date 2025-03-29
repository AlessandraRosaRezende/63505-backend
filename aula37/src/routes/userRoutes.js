const express = require('express');
const router = express.Router();
const { getProfile, togglePremium, changeRole, getAllUsers } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.get('/profile', authMiddleware, getProfile);
router.get('/premium/:uid', authMiddleware, adminMiddleware, togglePremium);
router.put('/premium/:uid', authMiddleware, adminMiddleware, changeRole);
router.get('/', authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;