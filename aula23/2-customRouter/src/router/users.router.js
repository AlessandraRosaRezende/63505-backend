const Router = require("./router");

class UsersRouter extends Router {
  init() {
    this.get("/", (req, res) => {
      res.sendSuccess("Olá Coders");
    });
  }
}

module.exports = UsersRouter;