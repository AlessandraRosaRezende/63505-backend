const contacts = require('../models/Contact');

class Contacts {
  constructor() {}

  async get() {
    let contatos = await contacts.find();
    return contatos;
  }

  async getById(id) {
    let contato = await contacts.findById(id);
    return contato;
  }

  async create(contact) {
    let contato = new contacts(contact);
    await contato.save();
    return contato;
  }

  async update(contact) {
    let contato = await contacts.findByIdAndUpdate(contact.id, contact, { new: true });
    return contato;
  }

  async delete(id) {
    let contato = await contacts.findByIdAndDelete(id);
    return contato;
  }
}

module.exports = Contacts;