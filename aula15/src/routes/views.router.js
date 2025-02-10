const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('index');
});

router.get('/list', async (req, res) => {
  console.log("na rota list");
  try {
    let users = await userModel.find();
    // console.log(users);
    users = users.map((user) => user.toJSON());

    return res.render('users', { users });
  } catch (error) {
    return res.render('error', { error: error.message });
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let user = await userModel.findById(id);
    user = user.toJSON();
    return res.render('update', { user });
  } catch (error) {
    return res.render('error', { error: error.message });
  }
});



module.exports = router;