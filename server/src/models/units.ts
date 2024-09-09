'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Units extends Model {
  	public id!: number;
	public bloodGroup!: string;
	public count!: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

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
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
);


export default Units;