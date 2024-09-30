'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A User can have many Survivors
      User.hasMany(models.Survivor, {
        foreignKey: 'user_id',
        as: 'survivors'
      });

      // A User can have many Weapons
      User.hasMany(models.Weapon, {
        foreignKey: 'id_user',
        as: 'weapons'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
