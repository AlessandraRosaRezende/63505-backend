const mongoose = require('mongoose');
const config = require('../config/config');

let Contacts;
console.log(config.persistence);

switch(config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.url);
    const ContactsMongo = require('../dao/contacts.mongo');
    Contacts = new ContactsMongo(connection);
    break;
  case "MEMORY":
    const ContactsMemory = require('../dao/contacts.memory');
    Contacts = new ContactsMemory();
    break;
}

module.exports = Contacts;