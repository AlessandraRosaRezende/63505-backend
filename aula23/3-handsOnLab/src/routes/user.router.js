const Router = require("./router");
const jwt = require("jsonwebtoken");

class UsersRouter extends Router {
  init() {
    this.post("/login", ["PUBLIC"], (req, res) => {
      let user = {
        email: req.body.email,
        role: req.body.role,
      };

      let token = jwt.sign(user, 'CoderSecret')
      res.sendSuccess({ token });
    });

    this.get("/teste", ["USER", "USER_PREMIUM", "ADMIN"], (req, res) => {
      if (req.user.role.toUpperCase() === "ADMIN") return res.sendSuccess("Eu sou ADMIN");
      if (req.user.role.toUpperCase() === "USER_PREMIUM") return res.sendSuccess("Eu sou USER_PREMIUM");
      else if (req.user.role.toUpperCase() === "USER") return res.sendSuccess("Eu sou USER comum");

      return res.sendServerError("Não pode acessar essa rota");
    });
  }
}

module.exports = UsersRouter;