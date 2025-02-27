const User = require('../models/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).lean();
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    res.render('userProfile', { user, title: 'Perfil do Usuário' });
  } catch (error) {
    res.status(500).send('Erro ao buscar perfil do usuário');
  }
};

const togglePremium = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findById(uid);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    user.role = user.role === 'user' ? 'premium' : 'user';
    await user.save();
    res.send(`Função do usuário alterada para ${user.role}`);
  } catch (error) {
    res.status(500).send('Erro ao alterar função do usuário');
  }
};

const changeRole = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findById(uid);
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }
    user.role = user.role === 'user' ? 'premium' : 'user';
    await user.save();
    res.send(`Função do usuário alterada para ${user.role}`);
  } catch (error) {
    res.status(500).send('Erro ao alterar função do usuário');
  }
};

module.exports = { getProfile, togglePremium, changeRole };