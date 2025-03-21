const contactDTO = require('../dto/contact.dto');

class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getContacts = async() => {
    const contacts = await this.dao.get();
    return contacts;
  };

  createContact = async (contact) => {
    const newContact = new contactDTO(contact);
    const createdContact = await this.dao.create(newContact);
    return createdContact;
  };
}

module.exports = ContactRepository;