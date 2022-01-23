const express = require('express');
const { addComment } = require('../controllers/commentsConrtoller');
const { getAllMovies, getMoviesById, getMoviesBySlug, createMovie } = require('../controllers/movieConrtoller');
const { authGurd } = require('../middlewares/authMiddleware');
let router = express.Router();

router.get('/', getAllMovies);
router.get('/get-movie-by-id/:id', getMoviesById )
router.get('/get-movie-by-slug/:slug', getMoviesBySlug )
router.post('/create-movie',authGurd, createMovie )
router.post('/create-comment/:movieId',authGurd, addComment )

module.exports = router;