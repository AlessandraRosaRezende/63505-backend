const express = require('express');
const passport = require('passport');

const router = express.Router();

router.use((req, res, next) => {
  if (req.session.user) {
    res.locals = { user: req.session.user };
  };
  next();
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate("login", { failureRedirect: "/faillogin", failureMessage: true }), async (req, res) => {
  if (!req.user) return res.status(400).json({ status: "error", message: "Unauthorized" });
  req.session.user = {
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    age: req.user.age,
  };
  return res.redirect('/profile');
});

router.get("/faillogin", (req, res) => {
  console.log("faliled Strategy");
  res.redirect('/login?message=Usuário ou senha inválidos')
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) {
      res.send('Logout efetuado com sucesso!');
    } else {
      res.send({ status: 'Erro no logout', body: err });
    }
  });
});

module.exports = router;