const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
