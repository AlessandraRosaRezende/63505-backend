const fs = require('fs').promises;
const path = require('path');
const usuariosPath = path.resolve(__dirname, '../data/usuarios.json');

const readUsuarios = async () => {
  try {
    const usuarios = await fs.readFile(usuariosPath, 'utf-8');
    if (usuarios) return JSON.parse(usuarios);
    return [];
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const writeUsuarios = async (usuarios) => {
  try {
    await fs.writeFile(usuariosPath, JSON.stringify(usuarios, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

const getUsuarios = async () => {
  const usuarios = await readUsuarios();
  return usuarios;
};

const postUsuarios = async (brinquedo) => {
  const usuarios = await readUsuarios();
  const newBrinquedo = { id: usuarios.length + 1, ...brinquedo };
  usuarios.push(newBrinquedo);
  await writeUsuarios(usuarios);
  return newBrinquedo;
};

const getUsuarioById = async (id) => {
  const usuarios = await readUsuarios();
  return usuarios.find((brinquedo) => brinquedo.id === id);
};

const updateUsuario = async (id, updatedBrinquedo) => {
  const usuarios = await readUsuarios();
  const index = usuarios.findIndex((brinquedo) => brinquedo.id === id);
  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...updatedBrinquedo };
    await writeUsuarios(usuarios);
    return usuarios[index];
  }
  return null;
};

const deleteUsuario = async (id) => {
  const usuarios = await readUsuarios();
  const index = usuarios.findIndex((brinquedo) => brinquedo.id === id);
  if (index !== -1) {
    const deletedUsuario = usuarios.splice(index, 1);
    await writeUsuarios(usuarios);
    return deletedUsuario[0];
  }
  return null;
};

module.exports = {
  getUsuarios,
  postUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario
}