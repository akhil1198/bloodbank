"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unitController_1 = require("../controllers/unitController");
const router = (0, express_1.Router)();
router.get('/units', unitController_1.getAllUnits);
exports.default = router;
