const usuarioModel = require('../schemas/Usuario');

const getUsuarios = async () => {
  const usuarios = await usuarioModel.find();
  return usuarios;
};

const postUsuarios = async (usuario) => {
  const newUsuario = await usuarioModel.create(usuario);
  return newUsuario;
};

const getUsuarioById = async (id) => {
  const usuario = await usuarioModel.findById(id);
  return usuario;
};

const updateUsuario = async (id, usuario) => {
  const updatedUsuario = await usuarioModel.findByIdAndUpdate(id, usuario, { new: true });
  return updatedUsuario;
};

const deleteUsuario = async (id) => {
  const deletedUsuario = await usuarioModel.findByIdAndDelete(id);
  return deletedUsuario;
};

module.exports = {
  getUsuarios,
  postUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
}