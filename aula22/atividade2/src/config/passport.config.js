const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy; // núcleo da estratégia
const ExtractJWT = require('passport-jwt').ExtractJwt; // extrator de jwt
const usuarios = require('../utils/users');

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
}

const initializePassport = () => {
  passport.use('jwt', new 
    JWTStrategy({ jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: 'coderToken'
  }, async (jwt_payload, done) => {
    try {
      console.log(jwt_payload);
      const user = usuarios.find(user => user.id === jwt_payload.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
}

module.exports = initializePassport;
