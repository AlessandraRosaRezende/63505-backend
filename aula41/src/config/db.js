import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

// instalar dotenv
// npm install dotenv

// criar arquivo .env
// MONGO_URL=mongodb://localhost:27017/adoptme

// criar arquivo config/db.js
// importar no app.js
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// connectDB();