const { Router } = require('express');
const contactsService = require('../repositories');

const router = Router();

router.get('/', async (req, res) => {
  const contacts = await contactsService.getContacts();
  res.send({ status: "sucess", payload: contacts, message: "Operação realizada com sucesso" });
});

router.post('/', async (req, res) => {
  const newContact = await contactsService.createContact(req.body);
  res.send({ status: "sucess", payload: newContact, message: "Operação realizada com sucesso" });
});

module.exports = router;