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
exports.createRequests = exports.getRequestsByID = exports.getAllRequests = void 0;
const requests_1 = __importDefault(require("../models/requests"));
// Get all Requests from the db
const getAllRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startInd = (page - 1) * limit;
        const endInd = page * limit;
        const requests = yield requests_1.default.findAll(); // Fetch all the requests
        const totalItems = requests.length; // Get total number of requests
        const paginatedRequests = requests.slice(startInd, endInd); // Slice the data based on page and limit
        res.json({
            paginatedRequests,
            page,
            limit,
            totalPages: Math.ceil(totalItems / limit), // Calculate total pages based on total items
            totalItems // Return the total number of requests
        });
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Error Retrieving Requests.");
    }
});
exports.getAllRequests = getAllRequests;
// Get requests by their id
const getRequestsByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield requests_1.default.findByPk(req.body.id);
        if (requests) {
            res.json(requests);
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
exports.getRequestsByID = getRequestsByID;
// Creating new Requests
const createRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, bloodGroup, age } = req.body;
        yield requests_1.default.create({ name, email, phone, bloodGroup, age }).then(() => {
            res.status(200).send("Requests Created!");
        }).catch((err) => {
            res.status(400).send("Unable to create requests!");
        });
    }
    catch (error) {
        console.error('Error creating requests:', error);
        res.status(500).send('Error creating requests');
    }
});
exports.createRequests = createRequests;
