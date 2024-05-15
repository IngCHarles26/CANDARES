"use strict";
// import { DataTypes } from "sequelize";
// import db from "../config/db";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export type UsuarioType = {
//   nombre: string,
//   email: string,
//   password: string,
//   token: string,
//   confirmado?: boolean,
// }
// const Usuario = db.define('usuarios',{
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   token: {
//     type: DataTypes.STRING,
//   },
//   confirmado: {
//     type: DataTypes.BOOLEAN,
//   },
// })
// export default Usuario
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
// Define el modelo de usuario
class Usuario extends sequelize_1.Model {
}
// Inicializa el modelo
Usuario.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: sequelize_1.DataTypes.STRING,
    },
    confirmado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    sequelize: db_1.default,
    modelName: 'Usuario',
});
exports.default = Usuario;
