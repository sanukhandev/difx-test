'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      comment: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
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
      'Comments', 
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
    await queryInterface.addColumn(
      'Comments', 
      'movieId', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies', 
          key: 'id', 
          as: 'movieId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};