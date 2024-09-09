'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Requests extends Model {
    public id!: number;
	public name!: string;
	public userid!: number;
	public count!: number;
	public requestedBloodGroup!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
Requests.init({
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
	requestedBloodGroup: {
		type: DataTypes.CHAR,
		allowNull: false,
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false
	}}, {
		sequelize,
		modelName: 'Requests',
		timestamps: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
);

export default Requests;