import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../../src/dao/Users.dao.js';
import Assert from 'assert';
import connectDB from '../../src/config/db.js';

dotenv.config();

const assert = Assert.strict;

before(async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});

after(async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
});

describe("Dao Users", () => {
  let userDao;
  before(() => {
    userDao = new User();
  });
  beforeEach(async function () {
    await mongoose.connection.dropDatabase(); // coloca só depois
  });

  describe("testing function get", () => {
    it("Sucesso - dao deve retornar os usuarios em um array", async () => {
      console.log(userDao);
      const resultado = await userDao.get();
      assert.strictEqual(Array.isArray(resultado), true); //depois muda pra false
    });
  });

  describe("testing function  save", () => {
    it("Sucesso - Deve adicionar um usuario", async () => {
      // Arrange
      const user = {
        first_name: "Alê",
        email: "ale@gmail.com",
        last_name: "Rezende",
        password: "sdfsdfsafbdbdagd",
      };

      // Act
      const resultado = await userDao.save(user);

      // Assert
      assert.ok(resultado._id);
      assert.equal(resultado.first_name, user.first_name)
    });
  });

  describe("update", () => {
    it("update com sucesso", async () => {
      // Arrange
      const user = {
        first_name: "Alê",
        last_name: "Rezende",
        email: "ale1@gmail.com",
        password: "sdfsdfsafbdbdagd",
      };
      const resultado = await userDao.save(user);

      const newUser = {
        first_name: "José",
        last_name: "Silva",
        email: "jose1@gmail.com",
        password:
          "$2b$10$RL3BZd5SOKAY1nHZ3G8x4.HNieau2sDtC1E6hmIrOT4t.bWYWHzm.",
        role: "user",
      };

      // Act
      const userUpdated = await userDao.update(resultado._id, newUser);

      // Assert
      assert.notStrictEqual(userUpdated, null);
      assert.strictEqual(userUpdated.first_name, newUser.first_name);
      assert.strictEqual(userUpdated.last_name, newUser.last_name);
      assert.strictEqual(userUpdated.email, newUser.email);
    });
  });
});