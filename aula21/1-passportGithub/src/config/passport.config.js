const passport = require('passport');
const local = require('passport-local');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const { createHash, isValidPassword } = require('../utils/password');

const localStrategy = local.Strategy;

const initializePassport = () => {
  passport.use('registro', new localStrategy({
    passReqToCallback: true, usernameField: 'email', passwordField: 'password'
  }, async (req, username, password, done) => {
    const { first_name, last_name, email, age } = req.body;
    try {
      let user = await User.findOne({ email: username });
      if (user) {
        console.log("User already exists");
        return done(null, false, { message: 'Email já existe' });
      }

      const newUser = new User({ first_name, last_name, email, age, password: createHash(password) });

      let result = await newUser.save();
      return done(null, result);
    } catch (error) {
      console.error(`Erro ao registrar usuário: ${error}`);
      return done(null, false, { message: 'Erro interno no servidor ao registrar o usuário' });
    }
  }));

  passport.use('github', new GitHubStrategy({ 
    clientID: 'Iv23lilRCZZdkxCqUfnC',
    clientSecret: 'd22ed6254ea2d4953894613f4d8bd929a2f9445a',
    callbackURL: 'http://localhost:8080/api/sessions/githubcallback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log(profile);
      let user = await User.findOne({ email: profile._json.email });
      if (!user) {
        let newUser = {
          first_name: profile._json.name.split(' ')[0],
          last_name: profile._json.name.split(' ')[1],
          age: profile._json.age || 18,
          email: profile._json.email,
          password: "",
        }
        let result = await User.create(newUser);
        return done(null, result);
      }
      else {
        return done(null, user);
      }
    } catch (error) {
      return done(`Erro ao autenticar usuário: ${error}`);
    }
  }));

  passport.use('login', new localStrategy({ usernameField: 'email', passwordField: 'password' }, async (username, password, done) => {
    try {
      let user = await User.findOne({ email: username });
      if (!user) {
        console.log("User not found");
        return done(null, false, { message: 'Usuário não encontrado' });
      }
      if (!isValidPassword(password, user.password)) {
        console.log("Invalid password");
        done(null, false);
        return res.redirect('/login?message=password inválida');
      }
      return done(null, user);
    } catch (error) {
      return done(`Erro ao autenticar usuário: ${error}`);
    }
  }));

  passport.use('reset-password', new localStrategy({ usernameField: 'email', passwordField: 'password' }, async (username, password, done) => {
    try {
      const userFound = await User.findOne({ email: username });

      if (!userFound) {
        console.log("User not found");
        return done(null, false, { message: 'Usuário não encontrado' });
      }
      const newPass = createHash(password);

      await User.updateOne({ email: username }, { password: newPass });
      return done(null, userFound);
    } catch (error) {
      return done(null, false, { message: `Erro ao alterar a password do usuário: ${error}` });
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(`Erro ao buscar usuário: ${error}`);
    }
  });
};

module.exports = initializePassport;