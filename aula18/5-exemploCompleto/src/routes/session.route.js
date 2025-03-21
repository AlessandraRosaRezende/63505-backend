const express = require("express");
const auth = require("../middlewares/userValidation");

const router = express.Router();

router.get("/admin", auth, (req, res) => {
  console.log("admin",req.session)

  if (req.session.views) {
    req.session.views++;
    return res.send(`${req.session.user} Voce visitou o site ${req.session.views}`);
  } else {
    req.session.views = 1;
    req.session.xablau = "é noix!"
    return res.send(`Seja bem vindo ${req.session.user}!`);
  }
});

router.get("/", (req, res) => {
  console.log(req.session);
  if (req.session.views) {
    req.session.views++;
    return res.send(`Voce visitou o site ${req.session.views}`);
  } else {
    req.session.views = 1;
    req.session.xablau = "é noix!"
    return res.send("Bem vindo ao site!");
  }
});

router.get("/login/:user/:password", (req, res) => {
  const { user, password } = req.params;

  if ((user === "Ale" && password === "1234")) {
    req.session.user = user;
    req.session.admin = true; 
    return res.send("Login efetuado com sucesso");
  } else if ((user === "Leo" && password === "1235")) {
    req.session.user = user;
    req.session.admin = false;
    return res.send("Login efetuado com sucesso");
  }

  return res.send("Login nao efetuado");
});

router.get("/logout", (req, res) => {
  const user = req.session.user;
  req.session.destroy((err) => {
    if (!err)
      return res.clearCookie("connect.sid").send(`${user} - Logout efetuado com sucesso`);
    else return res.send({ status: "Erro ao efetuar logout", body: err });
  });
});

module.exports = router;
