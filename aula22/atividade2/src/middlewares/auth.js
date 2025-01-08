const authorization = () => {
  return async (req, res, next) => {
    console.log(req.user);
    try {
      if (!req.user) return res.status(401).send({ error: 'Usuario não autenticado' });
      if (req.user.role !== 'admin') {
        console.log(req.user);
        return res.status(403).send({ error: 'Usuario nao autorizado' });
      }
      return next();
    } catch (error) {
      console.error('Erro ao autorizar usuario', error);
      return res.status(500).send({ error: 'Erro ao autorizar usuario' });
    }
  }
}

module.exports = authorization;