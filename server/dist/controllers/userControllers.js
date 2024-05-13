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
exports.registrar = exports.login = void 0;
const token_1 = require("../helpers/token");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//GET auth/login
const login = (req, res) => {
    return res.json({ holi: 'login chiii' });
};
exports.login = login;
//POST auth/registro
const registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, nombre, password } = req.body;
    try {
        const exist = yield Usuario_1.default.findOne({ where: { email } });
        if (exist)
            return res.status(200).send({ success: false, message: 'El usuario ya está registrado' });
        const salt = yield bcrypt_1.default.genSalt(10);
        password = yield bcrypt_1.default.hash(password, salt);
        yield Usuario_1.default.create({ email, nombre, password, token: (0, token_1.genToken)() });
        return res.status(200).send({ success: true, message: 'Registro exitoso' });
    }
    catch (error) {
        res.status(500).send({ message: 'Algo Fallo' });
    }
});
exports.registrar = registrar;
