'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await queryInterface.sequelize.query(
      `SELECT id from users;`
    );

    const userId = user[0][0].id;
    const movies = await queryInterface.sequelize.query(
      `SELECT id from movies;`
    );
    const moviesRows = movies[0];
    let comments = []
    moviesRows.forEach(movie => 
      {
        comments.push({
          movieId: movie.id,
          comment: 'This is a comment',
          userId: userId,
          status: 1,
        })
      }
    )

    await queryInterface.bulkInsert('Comments',comments, {})

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
