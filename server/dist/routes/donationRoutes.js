"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donationsController_1 = require("../controllers/donationsController");
const router = (0, express_1.Router)();
router.get('/donations', donationsController_1.getAllDonations);
exports.default = router;
