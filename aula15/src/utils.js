const multer = require('multer');
const path = require('path');

// Configuração do armazenamento para multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(`${__dirname}/public/images`)); // Diretório onde as imagens serão salvas
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Nome único para o arquivo
  }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Arquivo não é uma imagem!'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
