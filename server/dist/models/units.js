'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Units extends sequelize_1.Model {
}
Units.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    bloodGroup: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    modelName: 'Units',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
});
exports.default = Units;
