const userModel = require('../models/user.model');

class UserDao {
  static async getUsers() {
    try {
      const users = userModel.find();
      return users
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw new Error('Erro ao buscar usuários');
    }
  }

  static async getUserById(uid) {
    try {
      const user = userModel.findById(uid);
      if (!user) throw new Error('Usuário não encontrado');
      return user;
    } catch (error) {
      console.error(`Erro ao buscar usuário com ID ${uid}:`, error);
      throw new Error('Erro ao buscar usuário');
    }
  }

  static async createUser(user) {
    try {
      const newUser = userModel.create(user);
      return newUser
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }

  static async updateUser(uid, user) {
    try {
      const findUser = userModel.findById(uid);
      if (!findUser) throw new Error('Usuário não encontrado');
      const updatedUser = userModel.updateOne({ _id: uid }, { $set: user });
      return updatedUser
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new Error('Erro ao atualizar usuário');
    }
  }
}

module.exports = UserDao;
