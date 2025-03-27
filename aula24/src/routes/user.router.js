const express = require('express');
const userModel = require('../model/user.model');
const validationUser = require('../middlewares/user.validation');
const { isValidatePassword, createHash } = require("../utils/index");
const passport = require("passport");

const auth = require("../middlewares/auth.middleware");

const passportCall = require("../utils/passport.utils");
isValidatePassword;
const upload = require('../utils/utils'); // Configuração do multer

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/user/faillogin" }),
  async (req, res) => {
    console.log("to no login rota", req.user);
    if (!req.user)
      return res.status(400).json({ status: "error", message: "Unauthorized" });

    const user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      role: req.user.role,
      avatar: req.user.avatar,
      token: req.user.token,
    };
    req.session.user = user;
    return res
      .cookie("accessToken", req.user.token)
      .render("index", { first_name: user.first_name });
  }
);

router.get("/faillogin", (req, res) => {
  console.log("faliled Strategy");
  res.render("loginFail");
});

router.post('/register', passportCall("jwt"), auth, validationUser, upload.single('avatar'), async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  const avatar = req.file ? `/images/${req.file.filename}` : '/images/default-avatar.png'; // Caminho do avatar
  const newPasswd = await createHash(password);

  const userCreated = await userModel.create({
    first_name,
    last_name,
    email,
    password: newPasswd,
    role,
    avatar
  });
  return res.render("userCreated", { first_name: userCreated.first_name });
});

router.get("/failregister", (req, res) => {
  console.log("faliled Strategy");
  res.send("Erro ao registrar");
});

router.put('/:id', upload.single('avatar'),
  passportCall("jwt"),
  auth,
  validationUser, async (req, res) => {
    try {
      console.log('tô no put');
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

router.delete('/:email', passportCall("jwt"), auth, async (req, res) => {
  const { email } = req.params;
  const userDeleted = await userModel.deleteOne({ email });

  return res.status(200).json(userDeleted);
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("accessToken");
  res.redirect("/");
});

module.exports = router;