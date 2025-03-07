const fs = require('fs').promises;

class ManagerUsers { 
  #path = `${__dirname}/data/users.json`;

  constructor() {}

  #readFile = async () => {
    const data = await fs.readFile(this.#path, 'utf-8');
    return JSON.parse(data);
  };

  #writeFile = async (data) => {
    await fs.writeFile(this.#path, JSON.stringify(data, null, 2));
  };

  postUser = async (user) => {
    const data = await this.#readFile();
    data.push(user);
    await this.#writeFile(data);
  };

  getUsers = async () => {
    return await this.#readFile();
  };

  getUserById = async (id) => {
    const data = await this.#readFile();
    return data.find(user => user.id === id);
  };

  putUser = async (id, user) => {
    const data = await this.#readFile();
    const index = data.findIndex(user => user.id === +id);
    const newUser = { id: +id, ...user };
    data[index] = newUser;
    await this.#writeFile(data);
  };

  deleteUser = async (id) => {
    const data = await this.#readFile();
    const index = data.findIndex(user => user.id === id);
    data.splice(index, 1);
    await this.#writeFile(data);
  };
};

module.exports = ManagerUsers;