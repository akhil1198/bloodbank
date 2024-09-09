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
exports.createUnits = exports.getUnitsByID = exports.getAllUnits = void 0;
const units_1 = __importDefault(require("../models/units"));
// Get all Units from the db
const getAllUnits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const units = yield units_1.default.findAll();
        res.json(units);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving Units.");
    }
});
exports.getAllUnits = getAllUnits;
// Get units by their id
const getUnitsByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const units = yield units_1.default.findByPk(req.body.id);
        if (units) {
            res.json(units);
        }
        else {
            res.status(400).send("Unit does not exist.");
        }
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving Unit.");
    }
});
exports.getUnitsByID = getUnitsByID;
// Creating new Units
const createUnits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, bloodGroup, age } = req.body;
        yield units_1.default.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Units Created!");
        }).catch((err) => {
            res.status(400).send("Unable to create units!");
        });
    }
    catch (error) {
        console.error('Error creating units:', error);
        res.status(500).send('Error creating units');
    }
});
exports.createUnits = createUnits;
