const { Router } = require('express');
const Contacts = require('../dao/factory');
const ContactDTO = require('../dto/contact.dto');

const router = Router();

router.get('/', async (req, res) => {
  const contacts = await Contacts.get();
  res.send({ status: "sucess", payload: contacts, message: "Operação realizada com sucesso" });
});

router.post('/', async (req, res) => {
  const contact = new ContactDTO(req.body);
  const newContact = await Contacts.create(contact);
  res.send({ status: "sucess", payload: newContact, message: "Operação realizada com sucesso" });
});

module.exports = router;