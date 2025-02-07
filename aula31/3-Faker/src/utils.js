const { faker } = require('@faker-js/faker');

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProduct = () => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: generateRandomNumber(1, 100),
    image: faker.image.url(),
    code: faker.string.alphanumeric(8),
    description: faker.commerce.productDescription(),
    id: faker.database.mongodbObjectId()
  }
};

const generateUsers = () => {
  let numOfProducts = generateRandomNumber(1, 10);;
  let products = [];

  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProduct());
  }

  return {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: faker.person.gender(),
    birthDate: faker.date.anytime(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['cliente', 'vendedor']),
    isPremium: faker.datatype.boolean(),
    jobTitle: faker.person.jobTitle(),
    id: faker.database.mongodbObjectId(),
    products,
  }
}

module.exports = { generateUsers };