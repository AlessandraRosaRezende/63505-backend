const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

class MongoSingleton {
  static #instance;

  constructor() {
    this.url = process.env.MONGO_URL;
    mongoose.connect(this.url);
  }

  static getInstance() {
    if (this.#instance) {
      console.log('\nNão é possível conectar novamente - conexão já existente');
      return this.#instance;
    }

    this.#instance = new MongoSingleton();
    console.log('Conexão realizada com sucesso');
    return this.#instance;
  }
};

module.exports = MongoSingleton;