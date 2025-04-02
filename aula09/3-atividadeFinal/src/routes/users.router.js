const express = require("express");
const users = require('../users');

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if(!name || !email || !password){
   return res.send("Impossivel cadastrar")
  }

  users.push({ name, email, password });

  console.log(users);
  res.send("Registro bem-sucedido!");
});

module.exports = router;
