const express = require('express');
const userModel = require('../models/user.model');
const userValidation = require('../middleware/user.validation');

const router = express.Router();

router.post('/', userValidation, async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // const userCreated = await new UserModel({
    //   first_name,
    //   last_name,
    //   email,
    //   password
    // });
    // userCreated.save();

    const userCreated = await userModel.create({
      first_name,
      last_name,
      email,
      password
    });
    return res.render("userCreated", { first_name: userCreated.first_name });
  } catch (error) {
    return res.render("error", { error: error.message });
  }
});

router.put('/:id', userValidation, async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;

    const userUpdated = await userModel.updateOne(
      { _id: id }, 
      { first_name, last_name, email, password }
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