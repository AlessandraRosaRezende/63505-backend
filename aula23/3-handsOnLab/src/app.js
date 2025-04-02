const express = require("express");
const UsersRouter = require("./routes/user.router");

const app = express();
app.use(express.json());

const usersRouter = new UsersRouter();

app.use("/", usersRouter.getRouter());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});