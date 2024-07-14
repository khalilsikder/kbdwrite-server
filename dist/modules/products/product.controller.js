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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.ProductServices.createProduct(productData);
    res.json({
        success: true,
        message: "product is create successfull",
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProducts();
        res.status(200).json({
            success: true,
            message: "product is fetch successfull",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not  is fetch moves",
            error: err,
        });
    }
});
const getProductBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { slug } = req.params;
        const result = yield product_service_1.ProductServices.getProductBySlug(slug);
        res.status(200).json({
            success: true,
            message: "product is fetch successfull",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not  is fetch moves",
            error: err,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getProductBySlug,
};
