"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    brand: {
        type: String,
        required: [true, "brand is required"],
    },
    availableQuantity: {
        type: Number,
        required: [true, "availableQuantity is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    ratting: {
        type: Number,
        required: [true, "rattingis required"],
    },
    slug: {
        type: String,
    },
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
