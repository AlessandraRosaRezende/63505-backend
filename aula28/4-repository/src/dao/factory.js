const mongoose = require('mongoose');
const config = require('../config/config');

let Contacts;
console.log(config.persistence);

switch(config.persistence) {
  case "MONGO":
    const connection = mongoose.connect(config.url);
    const ContactsMongo = require('./contacts.mongo');
    Contacts = new ContactsMongo(connection);
    break;
  case "MEMORY":
    const ContactsMemory = require('./contacts.memory');
    Contacts = new ContactsMemory();
    break;
}

module.exports = Contacts;