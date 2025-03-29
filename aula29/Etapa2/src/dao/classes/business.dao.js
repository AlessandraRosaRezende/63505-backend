const businessModel = require('../models/business.model');

class BusinessDao {
  static async getBusiness() {
    try {
      const business = businessModel.find();
      return business
    } catch (error) {
      console.error('Erro ao buscar negócios:', error);
      throw new Error('Erro ao buscar negócios');
    }
  }

  static async getBusinessById(bid) {
    try {
      const business = businessModel.findById(bid);
      if (!business) throw new Error('Negócio não encontrado');
      return business;
    } catch (error) {
      console.error(`Erro ao buscar negócio com ID ${bid}:`, error);
      throw new Error('Erro ao buscar negócio');
    }
  }

  static async createBusiness(business) {
    try {
      const newBusiness = businessModel.create(business);
      return newBusiness
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
      throw new Error('Erro ao criar negócio');
    }
  }

  static async updateBusiness(bid, business) {
    try {
      const findBusiness = businessModel.findById(bid);
      if (!findBusiness) throw new Error('Negócio não encontrado');
      const updatedBusiness = businessModel.updateOne({ _id: bid }, { $set: business });
      return updatedBusiness
    } catch (error) {
      console.error('Erro ao atualizar negócio:', error);
      throw new Error('Erro ao atualizar negócio');
    }
  }
}

module.exports = BusinessDao;
