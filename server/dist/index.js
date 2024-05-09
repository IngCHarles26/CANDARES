"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const PORT = process.env.SERVER_PORT;
const server = (0, express_1.default)();
// routes
server.use('/', userRoutes_1.default);
//iniciando el servidor
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} chupala layme`);
});
