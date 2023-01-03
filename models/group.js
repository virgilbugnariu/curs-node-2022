'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Group.hasMany(models.Student);
    }
  }
  Group.init({
    name: DataTypes.STRING,
    year: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
