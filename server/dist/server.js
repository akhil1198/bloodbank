"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const unitRoutes_1 = __importDefault(require("./routes/unitRoutes"));
const requestRoutes_1 = __importDefault(require("./routes/requestRoutes"));
const donationRoutes_1 = __importDefault(require("./routes/donationRoutes"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
// Configure Sequelize connection
const sequelize = new sequelize_1.Sequelize('bloodbank', 'postgres', 'Akhil@1198', {
    host: 'localhost',
    dialect: 'postgres', // or whatever database you're using (e.g., 'mysql', 'sqlite')
});
// Test the Database Connection
sequelize
    .authenticate()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Connection to the database has been established successfully.');
    // const results = await Donations.findAll();
    // console.log("Users : ", results)
}))
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
app.use('/api', userRoutes_1.default);
app.use('/api', unitRoutes_1.default);
app.use('/api', donationRoutes_1.default);
app.use('/api', requestRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(port, () => {
    console.log("Server started at port", port);
});
