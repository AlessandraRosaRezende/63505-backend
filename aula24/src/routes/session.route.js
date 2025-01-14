const express = require("express");

const router = express.Router();

const auth = (req, res, next) => {
  if (req.session?.admin) {
    return next();
  }
  res.send("Não autorizado");
};

router.get("/admin", auth, (req, res) => {
  return res.send("Admin");
});

router.get("/", (req, res) => {
  console.log(req.session);
  if (req.session.views) {
    req.session.views++;
    res.send(`Voce visitou o site ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send("Bem vindo ao site!");
  }
});

router.get("/login/:user/:password", (req, res) => {
  const { user, password } = req.params;
  
  if ((user === "Ale" && password === "1234")) {
    req.session.user = user;
    req.session.admin = true; 
    return res.send("Login efetuado com sucesso");
  } else if ((user === "John" && password === "1235")) {
    req.session.user = user;
    req.session.admin = false;
    return res.send("Login efetuado com sucesso");
  }

  return res.send("Login nao efetuado");
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err)
      res.clearCookie("connect.sid").send("Logout efetuado com sucesso");
    else res.send({ status: "Erro ao efetuar logout", body: err });
  });
});

module.exports = router;
