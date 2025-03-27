const express = require("express");
const UsersRouter = require("./router/users.router");

const app = express();

const usersRouter = new UsersRouter();

app.use("/users", usersRouter.getRouter());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});