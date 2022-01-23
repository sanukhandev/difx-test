const express = require('express');
const { getAllMovies, getMoviesById, getMoviesBySlug, createMovie } = require('../controllers/movieConrtoller');
const { authGurd } = require('../middlewares/authMiddleware');
let router = express.Router();

router.get('/', getAllMovies);
router.get('/get-movie-by-id/:id', getMoviesById )
router.get('/get-movie-by-slug/:slug', getMoviesBySlug )
router.post('/create-movie',authGurd, createMovie )

module.exports = router;