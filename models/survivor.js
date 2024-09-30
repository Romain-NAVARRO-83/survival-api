'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survivor extends Model {
    static associate(models) {
      // Each Survivor belongs to one User
      Survivor.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // Each Survivor can have many Weapons
      Survivor.hasMany(models.Weapon, {
        foreignKey: 'id_bearer',
        as: 'weapons'
      });
    }
  }
  Survivor.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    XP: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Survivor',
  });
  return Survivor;
};
