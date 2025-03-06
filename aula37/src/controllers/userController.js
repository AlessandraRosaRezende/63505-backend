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

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    const user = req.user;
    res.render('adminUsers', { users, title: 'Lista de Usuários', user });
  } catch (error) {
    res.status(500).send('Erro ao buscar lista de usuários');
  }
}

const changeRole = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findById(uid);

    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    switch (user.role) {
      case 'user':
        user.role = 'premium';
        break;
      case 'premium':
        user.role = 'user';
        break;
      default:
        return res.status(400).send('Função de usuário inválida');
    }

    await user.save();
    res.redirect('/users'); // Redireciona para a lista de usuários
  } catch (error) {
    res.status(500).send('Erro ao atualizar função do usuário');
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

module.exports = { getProfile, changeRole, getAllUsers, togglePremium };