'use strict';

const { slugGenerator } = require('../utils/commonUtil');
module.exports = {
  async up (queryInterface, Sequelize) {

    const user = await queryInterface.sequelize.query(
      `SELECT id from users;`
    );

    const userId = user[0][0].id;

     await queryInterface.bulkInsert('Movies', [{
      movieName: "The Shawshank Redemption",
      movieDescription: "Two imprisoned",
      releaseDate: "1994-10-14",
      rating: 9.3,
      ticketPrice: 10,
      country: "USA",
      genre: "Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      userId: userId,
      slug: slugGenerator("The Shawshank Redemption"),
    },{
      movieName: "The Godfather",
      movieDescription: "The aging patriarch",
      releaseDate: "1972-03-14",
      rating: 9.2,
      ticketPrice: 10,
      country: "USA",
      genre: "Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
      userId: userId,
      slug: slugGenerator("The Godfather"),
    },{
      movieName: "The Godfather: Part II",
      movieDescription: "The early life and career of",
      releaseDate: "1974-12-20",
      rating: 9.0,
      ticketPrice: 10,
      country: "USA",
      genre: "Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      userId: userId,
      slug: slugGenerator("The Godfather: Part II"),

    },{
      movieName: "The Dark Knight",
      movieDescription: "When the menace known as the Joker",
      releaseDate: "2008-07-18",
      rating: 9.0,
      ticketPrice: 10,
      country: "USA",
      genre: "Thriller",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      userId: userId,
      slug: slugGenerator("The Dark Knight"),
    },{
      movieName: "12 Angry",
      movieDescription: "A look at the life of",
      releaseDate: "1999-03-10",
      rating: 8.9,
      ticketPrice: 10,
      country: "USA",
      genre: "Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      userId: userId,
      slug: slugGenerator("12 Angry"),
    }], {});



  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
