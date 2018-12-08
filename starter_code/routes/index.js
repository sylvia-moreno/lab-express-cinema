const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log('movies', movies)
            res.render('movies', { movies })
        })
        .catch(error => {
            next(error)
        })
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findOne({ _id: req.params.id })
        .then(movie => {
            console.log('movie', movie)
            res.render('movie', { movie })
        })
        .catch(error => {
            next(error)
        })
})


module.exports = router;