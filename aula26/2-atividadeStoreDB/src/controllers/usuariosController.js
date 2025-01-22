const usuariosService = require('../services/usuariosService');

const getUsuarios = async (req, res) => {
  const Usuarios = await usuariosService.getUsuarios();
  return res.status(200).json(Usuarios);
};

const postUsuario = async (req, res) => {
  const Usuario = await usuariosService.postUsuarios(req.body);
  if (!Usuario) return res.status(400).json({ message: 'Dados inválidos' });
  return res.status(201).json(Usuario);  
};

const getUsuarioById = async (req, res) => {
  const Usuario = await usuariosService.getUsuarioById(req.params.id);
  if (!Usuario) return res.status(404).json({ message: 'Usuario não encontrado' });
  return res.status(200).json(Usuario);
};

const updateUsuario = async (req, res) => {
  const Usuario = await usuariosService.updateUsuario(req.params.id, req.body);
  if (Usuario) {
    return res.status(200).json(Usuario);
  } else {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
}

const deleteUsuario = async (req, res) => {
  const Usuario = await usuariosService.deleteUsuario(req.params.id);
  if (Usuario) {
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
}

module.exports = {
  getUsuarios,
  postUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};