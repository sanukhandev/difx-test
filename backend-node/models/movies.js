'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    static associate(models) {
      this.belongsTo(models.User, {  
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        as: 'user',
        });
      this.hasMany(models.Comments, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
        as: 'comments',
        });
    }
  }
  Movies.init({
    movieName: DataTypes.STRING,
    movieDescription: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    ticketPrice: DataTypes.INTEGER,
    country: DataTypes.STRING,
    genre: DataTypes.STRING,
    poster: DataTypes.STRING,
    slug: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};