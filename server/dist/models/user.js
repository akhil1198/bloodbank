'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bloodGroup: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    sequelize: db_1.default,
    modelName: 'Users',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});
exports.default = Users;
