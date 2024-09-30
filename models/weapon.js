'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    static associate(models) {
      // A Weapon belongs to a User (the owner of the weapon)
      Weapon.belongsTo(models.User, {
        foreignKey: 'id_user',
        as: 'user'
      });

      // A Weapon belongs to a Survivor (the bearer of the weapon)
      Weapon.belongsTo(models.Survivor, {
        foreignKey: 'id_bearer',
        as: 'bearer'
      });
    }
  }
  Weapon.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    damage: DataTypes.DECIMAL,
    rate_of_fire: DataTypes.DECIMAL,
    range: DataTypes.INTEGER,
    id_bearer: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};
