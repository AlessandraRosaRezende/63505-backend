const usuariosModel = require('../models/usuariosModel');

const getUsuarios = async () => {
  const usuarios = await usuariosModel.getUsuarios();
  return usuarios;
}

const postUsuarios = async (usuario) => {
  if (!usuario.nome || !usuario.sobrenome || !usuario.email || !usuario.senha) return null;
  
  const newUsuario = await usuariosModel.postUsuarios(usuario);
  return newUsuario;
};

const getUsuarioById = async (id) => {
  const usuario = await usuariosModel.getUsuarioById(id);
  return usuario;
};

const updateUsuario = async (id, usuario) => {
  const updatedUsuario = await usuariosModel.updateUsuario(id, usuario);
  return updatedUsuario;
};

const deleteUsuario = async (id) => {
  const deletedUsuario = await usuariosModel.deleteUsuario(id);
  return deletedUsuario;
};

module.exports = {
  getUsuarios,
  postUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
}