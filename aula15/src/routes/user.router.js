const express = require('express');
const userModel = require('../models/user.model');
const userValidation = require('../middleware/user.validation');
const upload = require('../utils'); // Configuração do multer

const router = express.Router();

router.post('/', upload.single('avatar'), userValidation, async (req, res) => {
  console.log('Arquivo recebido:', req.file); // Verifica o arquivo recebido
  console.log('Dados do formulário:', req.body); // Verifica os dados enviados no formulário
  try {
    const { first_name, last_name, email, password } = req.body;
    const avatar = req.file ? `/images/${req.file.filename}` : '/images/default-avatar.png'; // Caminho do avatar

    // const userCreated = await new UserModel({
    //   first_name,
    //   last_name,
    //   email,
    //   password,
    //   avatar
    // });
    // userCreated.save();

    const userCreated = await userModel.create({
      first_name,
      last_name,
      email,
      password,
      avatar
    });
    return res.render("userCreated", { first_name: userCreated.first_name });
  } catch (error) {
    return res.render("error", { error: error.message });
  }
});

router.put('/:id', upload.single('avatar'), userValidation, async (req, res) => {
  console.log('Arquivo recebido:', req.file); // Verifica o arquivo recebido
  console.log('Dados do formulário:', req.body); // Verifica os dados enviados no formulário
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    const avatar = req.file ? `/images/${req.file.filename}` : '/images/default-avatar.png'; // Caminho do avatar

    const userUpdated = await userModel.updateOne(
      { _id: id }, 
      { first_name, last_name, email, password, avatar }
    );

    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.render("error", { error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const userDeleted = await userModel.deleteOne({ _id: id });

    return res.status(200).json(userDeleted);
  } catch (error) {
    return res.render("error", { error: error.message });
  }
});

module.exports = router;