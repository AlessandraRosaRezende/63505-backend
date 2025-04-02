const express = require('express');
const userModel = require('../model/user.model');
const passportCall = require("../utils/passport.utils");
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('login');
});

router.get("/home", passportCall("jwt"), (req, res) => {
  res.render("index", { first_name: req?.session?.user?.first_name });
});

router.get("/register", passportCall("jwt"), (req, res) => {
  console.log(req.session);
  console.log(req?.session?.user?.role === "admin");
  res.render("register", {
    isAdmin: req?.session?.user?.role === "admin" || false,
  });
});
router.get("/list", passportCall("jwt"), async (req, res) => {
  console.log("HHHHHH", req.session);
  let users = await userModel.find({});
  // faz a conversão para JSON para que o handlebars consiga renderizar
  // https://github.com/handlebars-lang/handlebars.js/issues/1642
  users = users.map((user) => user.toJSON());
  //res.render("list", { users, allowDelete: req?.session?.user?.role === "admin" || false,
  // allowEdit: req?.session?.user?.role === "admin" || false });
  res.render("list", {
    users,
    isAdmin: req?.session?.user?.role === "admin" || false,
  });
});

router.get('/edit/:id', passportCall("jwt"), async (req, res) => {
  const { id } = req.params;
  let user = await userModel.findById(id);
  user = user.toJSON();
  console.log('user', user);
  return res.render('edit', {
    user,
    isAdmin: req?.session?.user?.role === "admin" || false,
    userLogged: req?.session?.user
  });
});

router.get(
  "/usuario-deletado/:email",
  passportCall("jwt"),
  async (req, res) => {
    const { email } = req.params;
    res.render("userDeletado", { 
      isAdmin: req?.session?.user?.role === "admin" || false,
      userLogged: req?.session?.user,
      email });
  }
);

module.exports = router;