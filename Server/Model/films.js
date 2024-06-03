const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmSchema = new Schema({
    title: String,
    description: String,
    rating: Number,
    genre: String
});

const Film = mongoose.model('Film', filmSchema, 'film');

module.exports = Film;
