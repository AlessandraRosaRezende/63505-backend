const Contacts = require('../dao/factory');
const ContactRepository = require('./contacts.repository');

const contactsService = new ContactRepository(Contacts);

module.exports = contactsService;