const brinquedoModel = require('../schemas/Brinquedo');

const getBrinquedos = async () => {
  const brinquedos = await brinquedoModel.find();
  return brinquedos;
};

const postBrinquedos = async (brinquedo) => {
  const newBrinquedo = await brinquedoModel.create(brinquedo);
  return newBrinquedo;
};

const getBrinquedoById = async (id) => {
  const brinquedo = await brinquedoModel.findById(id);
  return brinquedo;
};

const updateBrinquedo = async (id, brinquedo) => {
  const updatedBrinquedo = await brinquedoModel.findByIdAndUpdate(id, brinquedo, { new: true });
  return updatedBrinquedo;
};

const deleteBrinquedo = async (id) => {
  const deletedBrinquedo = await brinquedoModel.findByIdAndDelete(id);
  return deletedBrinquedo;
};

module.exports = {
  getBrinquedos,
  postBrinquedos,
  getBrinquedoById,
  updateBrinquedo,
  deleteBrinquedo
}