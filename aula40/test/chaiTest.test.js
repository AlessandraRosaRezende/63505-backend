import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import User from '../src/dao/Users.dao.js';
import chai from 'chai';
import connectDB from '../src/config/db.js';

const expect = chai.expect;

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

describe('Testando o Users DAO com chai', () => {
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
    expect(result).to.be.an('array');
  });

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
    expect(result).to.have.property('_id');
    expect(result.first_name).to.equal(user.first_name);
    expect(result.pets).to.be.an('array');
    expect(result.pets).to.have.length(0);
    expect(result.pets).to.deep.equal([]); 
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
    expect(userByEmail).to.be.an('object');
    expect(userByEmail).to.have.property('email');
    expect(userByEmail.email).to.equal(user.email);
  });

  it('PUT - DAO deve atualizar um usuário', async () => {
    // Arrange
    const user = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@teste.com.br',
      password: '123456'
    }

    const result = await userDao.save(user);

    const newUser = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@teste.com.br',
      password: '123456'
    }

    // Act
    const updatedUser = await userDao.update(result._id, newUser);

    //Arrange
    expect(updatedUser).to.be.an('object');
    expect(updatedUser._id).to.be.deep.equal(result._id); // Verifica se o ID é o mesmo - conteúdo
    expect(updatedUser.first_name).to.equal(newUser.first_name);
    expect(updatedUser).to.have.property('pets');
    expect(updatedUser.pets).to.have.length(0);
  })

  it('DELETE - DAO deve deletar um usuário', async () => {
    // Arrange
    const user = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@teste.com.br',
      password: '123456'
    }

    const result = await userDao.save(user);
    const id = result._id;

    // Act
    await userDao.delete(id);

    // Assert
    const userDeleted = await userDao.getBy({ _id: id });
    expect(userDeleted).to.be.null;
    expect(userDeleted).to.be.equal(null);
  });
});
