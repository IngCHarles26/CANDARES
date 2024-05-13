"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
const genToken = () => Math.random().toString(32).substring(2) + Date.now().toString(32);
exports.genToken = genToken;
