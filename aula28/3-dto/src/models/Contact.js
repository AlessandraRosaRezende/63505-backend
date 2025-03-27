const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  active: {
    type: Boolean,
    default: true
  },
  phone: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;