'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Units extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Units.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bloodGroup: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Units',
    timestamps: true,
    createdAt: 'createdOn',
    updatedAt: 'updatedOn'
  });
  return Units;
};