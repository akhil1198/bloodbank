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
exports.loginUser = exports.createUser = exports.getUserByID = exports.getAllUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Get all users from the db
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startInd = (page - 1) * limit;
        const endInd = page * limit;
        const user = yield user_1.default.findAll();
        const paginatedUser = user.slice(startInd, endInd);
        console.log("data: ", paginatedUser);
        res.json({
            paginatedUser,
            page,
            limit,
            totalPages: Math.ceil(paginatedUser.length / limit),
            totalItems: paginatedUser.length
        });
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving Users.");
    }
});
exports.getAllUsers = getAllUsers;
// Get user by their id
const getUserByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(req.body.id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(400).send("User does not exist.");
        }
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving User.");
    }
});
exports.getUserByID = getUserByID;
// Creating new users
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, bloodGroup, age, password } = req.body;
        console.log(req.body);
        const userExists = yield user_1.default.findOne({
            where: {
                email: email
            }
        });
        console.log(email, "response -> ", userExists);
        if (userExists) {
            res.status(400).send("User already exists!");
        }
        else {
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hashedPass = yield bcryptjs_1.default.hash(password, salt);
            yield user_1.default.create({ name, email, phone, bloodGroup, age, password: hashedPass }).then(() => {
                res.status(200).send("User Created!");
            }).catch((err) => {
                console.log("Unable to create user!", err);
                res.status(400).send("Unable to create user!");
            });
        }
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "Please provide all the required details."
            });
        }
        const userExists = yield user_1.default.findOne({
            where: {
                email: email
            }
        });
        console.log(email, "response -> ", userExists);
        if (userExists) {
            console.log("login user -> ", userExists.dataValues.password);
            const validatePass = yield bcryptjs_1.default.compare(password, userExists.dataValues.password);
            if (!validatePass) {
                res.status(400).json({
                    message: "Invalid Password"
                });
            }
            else {
                res.status(200).json({
                    message: "User Logged In!",
                    user: {
                        data: userExists.dataValues
                    }
                });
            }
        }
        else {
            res.status(400).send("User does not exist!");
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.loginUser = loginUser;
