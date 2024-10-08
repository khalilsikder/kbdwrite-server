"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./modules/products/products.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/products', products_route_1.productRoutes);
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('got data');
});
exports.default = app;
