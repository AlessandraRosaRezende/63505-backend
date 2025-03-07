require('dotenv').config()

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
  secret: process.env.SECRET
};