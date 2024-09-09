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
exports.createDonations = exports.getDonationsByID = exports.getAllDonations = void 0;
const donations_1 = __importDefault(require("../models/donations"));
// Get all Donations from the db
const getAllDonations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donations = yield donations_1.default.findAll();
        res.json(donations);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving Donations.");
    }
});
exports.getAllDonations = getAllDonations;
// Get donations by their id
const getDonationsByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donations = yield donations_1.default.findByPk(req.body.id);
        if (donations) {
            res.json(donations);
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
exports.getDonationsByID = getDonationsByID;
// Creating new Donations
const createDonations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, bloodGroup, age } = req.body;
        yield donations_1.default.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Donations Created!");
        }).catch((err) => {
            res.status(400).send("Unable to create donations!");
        });
    }
    catch (error) {
        console.error('Error creating donations:', error);
        res.status(500).send('Error creating donations');
    }
});
exports.createDonations = createDonations;
