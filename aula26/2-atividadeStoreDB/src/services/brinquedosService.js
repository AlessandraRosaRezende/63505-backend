const brinquedosModel = require('../models/brinquedosModel');

const getBrinquedos = async () => {
  const brinquedos = await brinquedosModel.getBrinquedos();
  return brinquedos;
}

const postBrinquedo = async (brinquedo) => {
  if (!brinquedo.nome || !brinquedo.preco) return null;
  if (typeof brinquedo.nome !== 'string' || typeof brinquedo.preco !== 'number') return null;
  if (brinquedo.preco <= 0) return null;
  // if (brinquedo.nome.length < 3) return null;

  const newBrinquedo = await brinquedosModel.postBrinquedos(brinquedo);
  return newBrinquedo;
};

const getBrinquedoById = async (id) => {
  const brinquedo = await brinquedosModel.getBrinquedoById(id);
  return brinquedo;
};

const updateBrinquedo = async (id, brinquedo) => {
  const updatedBrinquedo = await brinquedosModel.updateBrinquedo(id, brinquedo);
  return updatedBrinquedo;
};

const deleteBrinquedo = async (id) => {
  const deletedBrinquedo = await brinquedosModel.deleteBrinquedo(id);
  return deletedBrinquedo;
};

module.exports = {
  getBrinquedos,
  postBrinquedo,
  getBrinquedoById,
  updateBrinquedo,
  deleteBrinquedo
}