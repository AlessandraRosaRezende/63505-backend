const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Conectado com sucesso ao MongoDb: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Erro de conexão ao MongoDb: ${error.message}`);
    process.exit(1);
  }
}

module.exports = connection;