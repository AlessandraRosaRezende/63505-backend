let users = [];

const getUser = (req, res) => {
  return res.status(200).json(users);
}

const postUser = (req, res) => {
  try {
    const novoUser = req.body;
    users.push(novoUser);
    return res.status(201).json(novoUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar o user' });
  }
}

module.exports = {
  getUser,
  postUser
}