const { Router } = require('express');
const Contacts = require('../dao/contacts.mongo');
// const Contacts = require('../dao/contacts.memory');

const router = Router();

const contactsService = new Contacts();

router.get('/', async (req, res) => {
  const contacts = await contactsService.get();
  res.send({ status: "sucess", payload: contacts, message: "Operação realizada com sucesso" });
});

router.post('/', async (req, res) => {
  const contact = req.body;
  const newContact = await contactsService.create(contact);
  res.send({ status: "sucess", payload: newContact, message: "Operação realizada com sucesso" });
});

module.exports = router;