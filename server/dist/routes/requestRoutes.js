"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requestsController_1 = require("../controllers/requestsController");
const router = (0, express_1.Router)();
router.get('/requests', requestsController_1.getAllRequests);
exports.default = router;
