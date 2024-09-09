'use strict';
const User = require('./User');
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Users from "./user";

class Donations extends Model {
  	public id!: number;
	public name!: string;
	public userid!: number;
	public count!: number;
	public bloodGroup!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Donations.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    bloodGroup: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Donations',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
);

export default Donations