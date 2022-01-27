const {Movies, Comments, User, sequelize} = require('../models');
const { slugGenerator } = require('../utils/commonUtil');
const { mapData, mapError } = require('../utils/responseMapper');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.findAll({
            attributes: ['id','movieName','movieDescription','releaseDate',[sequelize.fn('date_format', sequelize.col('releaseDate'), '%Y'), 'year'],'rating','ticketPrice','country','genre','slug']
        },
        
        );
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
            attributes: ['id','movieName','movieDescription','poster','releaseDate',[sequelize.fn('date_format', sequelize.col('releaseDate'), '%Y'), 'year'],'rating','ticketPrice','country','genre','slug'],
            include: [{
                model: Comments,
                as: 'comments',
                attributes: ['id', 'comment', 'status', [sequelize.fn('date_format', sequelize.col('comments.createdAt'), '%d, %b %Y @ %h:%m %p'), 'commentedOn']],
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
        const {name, description, date, rating, ticketPrice, genre, poster, country} = req.body;
        console.log(req.body)
        const movie = await Movies.create({
            movieName:name,
            movieDescription:description,
            releaseDate:date,
            rating,
            ticketPrice,
            genre,
            poster,
            country,
            slug: slugGenerator(name),
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