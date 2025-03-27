const dotenv = require('dotenv').config();

module.exports = {
  persistence: process.env.PERSISTENCE,
  url: process.env.MONGO_URL
};