'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    numberOfBathroom: DataTypes.INTEGER,
    numberOfBedroom: DataTypes.INTEGER,
    price: DataTypes.BIGINT,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  })

  House.associate = function(models){
    House.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'landlord',
      onDelete: 'CASCADE',
    })
  }

  return House;
};










// class Houses extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // };
  // Houses.init({
  //   image: DataTypes.STRING,
  //   description: DataTypes.TEXT,
  //   location: DataTypes.STRING,
  //   numberOfBathroom: DataTypes.INTEGER,
  //   numberOfBedroom: DataTypes.INTEGER,
  //   price: DataTypes.BIGINT,
  //   status: DataTypes.STRING,
  //   userId: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Houses',
  // });