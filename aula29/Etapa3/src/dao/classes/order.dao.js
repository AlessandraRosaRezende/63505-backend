const orderModel = require('../models/order.model');

class OrderDao {
  static async getOrders() {
    try {
      const orders = orderModel.find();
      return orders
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      throw new Error('Erro ao buscar pedidos');
    }
  }

  static async getOrdersById(oid) {
    try {
      const order = orderModel.findById(oid);
      if (!order) throw new Error('Pedido não encontrado');
      return order;
    } catch (error) {
      console.error(`Erro ao buscar pedido com ID ${bid}:`, error);
      throw new Error('Erro ao buscar pedido');
    }
  }

  static async createOrder(order) {
    try {
      const newOrder = orderModel.create(order);
      return newOrder
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      throw new Error('Erro ao criar pedido');
    }
  }

  static async updateOrder(oid, order) {
    try {
      const findOrder = orderModel.findById(oid);
      if (!findOrder) throw new Error('Pedido não encontrado');
      const updatedOrder = orderModel.updateOne({ _id: oid }, { $set: order });
      return updatedOrder
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
      throw new Error('Erro ao atualizar pedido');
    }
  }
}

module.exports = OrderDao;
