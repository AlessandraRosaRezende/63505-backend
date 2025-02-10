const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/'));
  },
  filename: function (req, file, cb) {
    const { nome, sobrenome } = req.body;
    const originalname = file.originalname;
    const fileExtension = path.extname(originalname);
    
    const newFileName = `${nome}_${sobrenome}${fileExtension}`;
    cb(null, newFileName);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;