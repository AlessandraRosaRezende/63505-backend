class Contacts {
  constructor() {
    this.contacts = [
      { id: 1, name: "Fulano", email: "fulano@email.com" },
      { id: 2, name: "Ciclano", email: "ciclano@email.com" }
    ];
  }

  async get() {
    return this.contacts;
  }

  async getById(id) {
    return this.contacts.find(contact => contact.id == id);
  }

  async create(contact) {
    this.contacts.push(contact);
    return this.contact;
  }

  async update(contact) {
    let index = this.contacts.findIndex(c => c.id == contact.id);
    this.contacts[index] = contact;
    return this.contacts[index];
  }

  async delete(id) {
    let index = this.contacts.findIndex(c => c.id == id);
    let contact = this.contacts[index];
    this.contacts.splice(index, 1);
    return contact;
  }
}

module.exports = Contacts;