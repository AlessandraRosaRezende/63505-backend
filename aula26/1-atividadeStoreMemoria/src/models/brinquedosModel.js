const fs = require('fs').promises;
const path = require('path');
const brinquedosPath = path.resolve(__dirname, '../data/brinquedos.json');

const readBrinquedos = async () => {
  try {
    const brinquedos = await fs.readFile(brinquedosPath, 'utf-8');
    if (brinquedos) return JSON.parse(brinquedos);
    return [];
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const writeBrinquedos = async (brinquedos) => {
  try {
    await fs.writeFile(brinquedosPath, JSON.stringify(brinquedos, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

const getBrinquedos = async () => {
  const brinquedos = await readBrinquedos();
  return brinquedos;
};

const postBrinquedos = async (brinquedo) => {
  const brinquedos = await readBrinquedos();
  const newBrinquedo = { id: brinquedos.length + 1, ...brinquedo };
  brinquedos.push(newBrinquedo);
  await writeBrinquedos(brinquedos);
  return newBrinquedo;
};

const getBrinquedoById = async (id) => {
  const brinquedos = await readBrinquedos();
  return brinquedos.find((brinquedo) => brinquedo.id === id);
};

const updateBrinquedo = async (id, updatedBrinquedo) => {
  const brinquedos = await readBrinquedos();
  const index = brinquedos.findIndex((brinquedo) => brinquedo.id === id);
  if (index !== -1) {
    brinquedos[index] = { ...brinquedos[index], ...updatedBrinquedo };
    await writeBrinquedos(brinquedos);
    return brinquedos[index];
  }
  return null;
};

const deleteBrinquedo = async (id) => {
  const brinquedos = await readBrinquedos();
  const index = brinquedos.findIndex((brinquedo) => brinquedo.id === id);
  if (index !== -1) {
    const deletedBrinquedo = brinquedos.splice(index, 1);
    await writeBrinquedos(brinquedos);
    return deletedBrinquedo[0];
  }
  return null;
};

module.exports = {
  getBrinquedos,
  postBrinquedos,
  getBrinquedoById,
  updateBrinquedo,
  deleteBrinquedo
}