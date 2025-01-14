const express = require("express");

const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const pathView = path.join(`${__dirname}/views`);
const cookieParser = require("cookie-parser");
const session = require("express-session");

const passport = require("passport");
const initializePassport = require("./config/passport.config");

const MongoStore = require("connect-mongo");

const viewRouter = require("./routes/views.router");
const userRouter = require("./routes/user.router");
const sessionRouter = require('./routes/session.route');
const cookieRouter = require("./routes/cookie.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("batatinha123"));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set("views", pathView);

app.use(express.static(path.join(`${__dirname}/public`)));

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/coder",
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
    }),
    secret: "batatinha123",
    resave: false,
    saveUninitialized: false,
  })
);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/", viewRouter);
app.use('/cookie', cookieRouter);
app.use('/session', sessionRouter);
app.use("/user", userRouter);

// aqui é o nome da database
mongoose.connect('mongodb+srv://alessandra:coder@clustercoder.n6nab.mongodb.net/coder') // informamos a database escola
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  }).catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error.message);
  });

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});