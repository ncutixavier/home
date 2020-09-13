'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {})

  User.associate = function (models) {
    User.hasMany(models.House, {
      foreignKey: 'userId',
      as: 'houses',
      onDelete: 'CASCADE'
    })
  }
  return User;
};



// class User extends Model {
//   /**
//    * Helper method for defining associations.
//    * This method is not a part of Sequelize lifecycle.
//    * The `models/index` file will call this method automatically.
//    */
//   static associate(models) {
//     // define association here
//   }
// };
// User.init({
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//   phone: DataTypes.STRING,
//   role: DataTypes.STRING
// }, {
//   sequelize,
//   modelName: 'User',
// });