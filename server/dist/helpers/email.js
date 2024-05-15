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
exports.emailRegistro = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const baseRouteFront = process.env.FRONTEND_URL || '';
const route = process.env.ROUTE_URL || '';
// @ts-ignore
const port = +process.env.EMAIL_PORT;
const emailRegistro = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    const transport = nodemailer_1.default.createTransport({
        host: process.env.EMAIL_HOST,
        port: port,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const { email, nombre, token } = datos;
    yield transport.sendMail({
        from: 'CANDARES',
        to: email,
        subject: 'CONFIRMA TU CUENTA EN CANDARES.com',
        text: 'CONFIRMA TU CUENTA EN CANDARES.com',
        html: `
      <p>Hola ${nombre}, comprueba tu cuenta en CANDARES.com </p>
      
      <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
      
      <a href="${baseRouteFront + route + token}"> Confirmar cuenta </a> </p>
      
      <p>Si no creaste la cuenta, puedes ignorar el mensaje</p>
    `
    });
});
exports.emailRegistro = emailRegistro;
