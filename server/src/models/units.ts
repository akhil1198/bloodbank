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
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bloodGroup: {
      type: DataTypes.CHAR,
      allowNull: false,
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