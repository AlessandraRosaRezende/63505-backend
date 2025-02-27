const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Obtém o token do cookie

  if (!token) {
    return res.status(401).send('Acesso negado');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send('Token inválido');
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado. Apenas administradores' });
  }
  next();
};

const premiumMiddleware = (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role !== 'premium' && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado. Apenas usuários premium' });
  }
  next();
}

module.exports = { authMiddleware, adminMiddleware, premiumMiddleware };