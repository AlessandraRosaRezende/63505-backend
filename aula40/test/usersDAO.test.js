import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import User from '../src/dao/Users.dao.js';
import Assert from 'assert';
import connectDB from '../src/config/db.js';

const assert = Assert.strict;

before(async () => {
    await connectDB();
});

after(async () => {
  try {
    await mongoose.disconnect();
    console.log('Desconectado do MongoDB');
  } catch (error) {
    console.log('Erro ao desconectar do MongoDB:', error);
  }
});

describe('Testando o Users DAO', () => {
  let userDao;

  before(() => {
    userDao = new User();
  });

  beforeEach(async function () {
    await mongoose.connection.dropDatabase();
  })

  it('GET - DAO deve retornar um array de usuários', async () => {
    console.log(userDao);

    const result = await userDao.get();
    assert.strictEqual(Array.isArray(result), true);
  });

  // TRIPLE A - Arrange, Act, Assert
  it('POST - DAO deve criar um novo usuário', async () => {
    // Arrange
    const user = {
      first_name: 'Alessandra',
      last_name: 'Rezende',
      email: 'alessandra@teste.com.br',
      password: '123456'
    }

    // Act
    const result = await userDao.save(user);

    // Assert
    assert.ok(result._id);
    assert.equal(result.first_name, user.first_name);
    assert.strictEqual(Array.isArray(result.pets), true); // formato
    assert.equal(result.pets.length, 0);
    assert.deepStrictEqual(result.pets, []); // conteúdo
  });

  it('GET BY EMAIL - DAO deve retornar um usuário específico', async () => {
    // Arrange
    const user = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@teste.com.br',
      password: '123456'
    }

    // Act
    await userDao.save(user);
    const userByEmail = await userDao.getBy({ email: user.email });

    // Assert
    assert.ok(userByEmail);
    assert.equal(userByEmail.email, user.email);
    assert.strictEqual(typeof userByEmail, 'object')
  });
})