const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Obtém o token do cookie

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (error) {
      // Token inválido, mas continua para permitir renderização do navbar com user: null
    }
  } else {
    req.user = null; // Usuário não autenticado
  }

  next();
};

const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acesso negado. Apenas administradores' });
  }
  next();
};

const premiumMiddleware = (req, res, next) => {
  if (!req.user || (req.user.role !== 'premium' && req.user.role !== 'admin')) {
    return res.status(403).json({ message: 'Acesso negado. Apenas usuários premium' });
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware, premiumMiddleware };