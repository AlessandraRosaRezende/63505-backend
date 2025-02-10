const passport = require('passport');
const local = require('passport-local');
const User = require('../models/user.model');
const { createHash, isValidPassword } = require('../utils/password');

const localStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    'registro', new localStrategy({
      passReqToCallback: true, usernameField: 'email', passwordField: 'password'
    }, async (req, username, password, done) => {
      try {
        const { first_name, last_name, email, age } = req.body;
        if (!first_name || !last_name || !email || !age || !password) {
          return done(null, false, { message: 'Favor preencher todos os campos' });
        }

        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
          console.log('Usuário já cadastrado');
          return done(null, false, { message: 'Usuário já cadastrado' });
        }

        const newUser = new User({
          first_name,
          last_name,
          email,
          age,
          password: createHash(password),
        });
        let result = await newUser.save();

        return done(null, result);
      } catch (error) {
        console.log('Erro ao cadastrar no banco', error);
        return done(error);
      }
    })
  );

  passport.use(
    'login', new localStrategy({
      passReqToCallback: true, usernameField: 'email', passwordField: 'password'
    }, async (req, username, password, done) => {
      try {
        const existingUser = await User.findOne({ email: username });
        if (!existingUser) {
          console.log('Usuário não cadastrado');
          done(null, false);
          return res.redirect('/login?message=Usuário ou senha inválidos');
        }

        if (!isValidPassword(password, existingUser.password)) {
          console.log('Senha inválida');
          done(null, false);
          return res.redirect('/login?message=Usuário ou senha inválidos');
        }
        
        return done(null, existingUser);
      } catch (error) {
        console.log('Erro ao fazer login', error);
        return done(error);
      }
    })
  );

  passport.use(
    'reset-password', new localStrategy({ 
      usernameField: 'email', passwordField: 'password' 
    }, async (username, password, done) => {
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
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
  });
};

module.exports = initializePassport;