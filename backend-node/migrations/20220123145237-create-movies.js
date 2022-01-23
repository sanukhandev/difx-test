'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieName: {
        type: Sequelize.STRING
      },
      movieDescription: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      ticketPrice: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addColumn(
      'Movies', 
      'userId', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', 
          key: 'id', 
          as: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};