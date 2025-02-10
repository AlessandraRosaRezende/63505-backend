const MongoSingleton = require('./mongoSingleton');

const mongoInstance = MongoSingleton.getInstance();
console.log(mongoInstance.url);

const anotherMongoInstance = MongoSingleton.getInstance();
console.log(anotherMongoInstance.url);