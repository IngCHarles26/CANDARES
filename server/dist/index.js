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
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.SERVER_PORT;
const server = (0, express_1.default)();
// DB conection(
function DBconection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.default.authenticate();
            db_1.default.sync();
            console.log('data base conected');
        }
        catch (err) {
            console.log(err);
        }
    });
}
DBconection();
server.use(express_1.default.json());
//cors
server.use((0, cors_1.default)({
    origin: ['http://localhost:5173']
}));
// routes
server.use('/auth', userRoutes_1.default);
//iniciando el servidor
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
