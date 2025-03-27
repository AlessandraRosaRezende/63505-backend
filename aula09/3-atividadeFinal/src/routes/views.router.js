const express = require("express");
const users = require('../users');

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.get('/list', (req, res) => {
  res.render("list", { users });
});

module.exports = router;
