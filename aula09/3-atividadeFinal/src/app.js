const express = require("express");
const viewsRouter = require("./routes/views.router");
const userRouter = require("./routes/users.router");
const { engine } = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use("/", viewsRouter)
app.use("/user", userRouter)

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});

module.exports = app;
