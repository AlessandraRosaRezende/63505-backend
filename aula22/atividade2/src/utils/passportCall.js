const passport = require('passport')

const passportCall = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, { session: false }, (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.status(401).send({
          error: info.message ? info.message : info.toString()
        })
      }
      req.user = user
      return next()
    })(req, res, next)
  }
}

module.exports = passportCall
