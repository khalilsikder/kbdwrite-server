"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', product_controller_1.productControllers.createProduct);
router.get('/:slug', product_controller_1.productControllers.getProductBySlug);
router.get('/', product_controller_1.productControllers.getAllProducts);
exports.productRoutes = router;
