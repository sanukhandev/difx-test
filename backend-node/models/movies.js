'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {  
        foreignKey: 'userId',
        });
      this.hasMany(models.Comments)
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