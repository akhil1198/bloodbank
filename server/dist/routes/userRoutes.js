"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get("/users", userController_1.getAllUsers);
router.post("/users/createUser", userController_1.createUser);
router.post("/users/login", userController_1.loginUser);
exports.default = router;
