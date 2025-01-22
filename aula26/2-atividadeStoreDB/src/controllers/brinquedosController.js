const brinquedosService = require('../services/brinquedosService');

const getBrinquedos = async (req, res) => {
  const brinquedos = await brinquedosService.getBrinquedos();
  return res.status(200).json(brinquedos);
};

const postBrinquedo = async (req, res) => {
  const brinquedo = await brinquedosService.postBrinquedo(req.body);
  if (!brinquedo) return res.status(400).json({ message: 'Dados inválidos' });
  return res.status(201).json(brinquedo);  
};

const getBrinquedoById = async (req, res) => {
  const brinquedo = await brinquedosService.getBrinquedoById(req.params.id);
  if (!brinquedo) return res.status(404).json({ message: 'Brinquedo não encontrado' });
  return res.status(200).json(brinquedo);
};

const updateBrinquedo = async (req, res) => {
  const brinquedo = await brinquedosService.updateBrinquedo(req.params.id, req.body);
  if (brinquedo) {
    return res.status(200).json(brinquedo);
  } else {
    return res.status(404).json({ message: 'Brinquedo não encontrado' });
  }
}

const deleteBrinquedo = async (req, res) => {
  const brinquedo = await brinquedosService.deleteBrinquedo(req.params.id);
  if (brinquedo) {
    return res.status(204).end();
  } else {
    return res.status(404).json({ message: 'Brinquedo não encontrado' });
  }
}

module.exports = {
  getBrinquedos,
  postBrinquedo,
  getBrinquedoById,
  updateBrinquedo,
  deleteBrinquedo,
};