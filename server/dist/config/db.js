"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const { BD_NAME, BD_USER, BD_PASS, BD_HOST } = process.env;
const db = new sequelize_1.Sequelize(BD_NAME || '', BD_USER || '', BD_PASS || '', {
    host: BD_HOST || '',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
exports.default = db;
