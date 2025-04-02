const mongoose = require("mongoose");
const collection = "students";

const schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  grade: Number,
  group: String
});

const studentModel = mongoose.model(collection, schema);

module.exports = studentModel;