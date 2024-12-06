const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const userCollection = "students"

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
});

userSchema.plugin(mongoosePaginate);

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;