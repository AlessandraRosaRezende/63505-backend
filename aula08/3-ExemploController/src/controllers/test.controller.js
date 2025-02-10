const getTest = (req, res) => {
  return res.status(200).json({ message: 'Teste!!!'})
}

module.exports = {
  getTest
};