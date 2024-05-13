"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
// get
router.get('/login', userControllers_1.login);
// post
router.post('/registro', userControllers_1.registrar);
exports.default = router;
