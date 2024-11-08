let pets = [];

const getPets = (req, res) => {
  try {
    res.status(200).json(pets)
  } catch (error) {
    console.log('Erro ao buscar os pets');
  }
}

const postPets = (req, res) => {
  try {
    const novoPet = req.body;
    pets.push(novoPet);
    return res.status(201).json(novoPet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o pet' });
  }
}

module.exports = {
  getPets,
  postPets
}