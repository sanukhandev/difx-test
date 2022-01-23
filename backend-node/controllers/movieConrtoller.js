const {Movies, Comments, User} = require('../models');
const { slugGenerator } = require('../utils/commonUtil');
const { mapData, mapError } = require('../utils/responseMapper');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.findAll();
        mapData(movies, res);
    } catch (error) {
        mapError(error, res);
    }
}

const getMoviesById = async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movies.findOne({
            where: {
                id,
            }
        });
        mapData(movie, res);
    } catch (error) {
        mapError(error, res);
    }
}

const getMoviesBySlug = async (req, res) => {
    try {
        const {slug} = req.params;
        const movie = await Movies.findOne({
            where: {
                slug,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt','userId']
            },
            include: [{
                model: Comments,
                as: 'comments',
                attributes: ['id', 'comment', 'status', 'createdAt', 'updatedAt'],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['firstName', 'lastName', 'email'],
                }]
            }]
        });
        mapData(movie, res);
    } catch (error) {
        mapError(error, res);
    }
}

const createMovie = async (req, res) => {
    try {
        const {title, description, year, rating, ticketPrice, genre, poster} = req.body;
        const movie = await Movies.create({
            name:title,
            description,
            year,
            rating,
            ticketPrice,
            genre,
            poster,
            trailerUrl,
            slug: slugGenerator(title),
            userId: req.user.id
        });
        mapData(movie, res);
    } catch (error) {
        mapError(error, res);
    }
}

const updateMovie = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, year, rating, ticketPrice, genre, poster} = req.body;
        const movie = await Movies.update({
            name:title,
            description,
            year,
            rating,
            ticketPrice,
            genre,
            poster,
            slug: slugGenerator(title),
            userId: req.user.id
        }, {
            where: {
                id,
            }
        });
        mapData(movie, res);
    } catch (error) {
        mapError(error, res);
    }
}

module.exports = {
    getAllMovies,
    getMoviesById,
    getMoviesBySlug,
    createMovie,
    updateMovie
}