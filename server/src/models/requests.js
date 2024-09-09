'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Requests extends sequelize_1.Model {
}
Requests.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    requestedBloodGroup: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'Requests',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});
