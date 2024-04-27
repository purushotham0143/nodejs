const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    id:Number,
    movie:String,
    rating:Number,
    image:String,
    imdb_url:String
});

const MoviesDetail = mongoose.model('moviesdetail',moviesSchema);

module.exports = MoviesDetail