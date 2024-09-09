'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Users extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public phone!: number;
	public bloodGroup!: string;
	public age!: number;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

}

Users.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
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
	}}, 
	{
		sequelize,
		modelName: 'Users',
		timestamps: true,
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
);

export default Users;






















// module.exports = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; CHAR: any; }) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models: any) {
//       // define association here
//     }
//   }
  
//   return Users;
// };