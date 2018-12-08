const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema({
    title: { type: String, required: true },
    director: { type: String },
    starts: { type: Array },
    image: { type: String },
    description: { type: String },
    showtimes: { type: Array }
});

const Movie = mongoose.model('Movie', movie);
module.exports = Movie;