"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const productSchema = new mongoose_1.Schema({
    name: {
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
productSchema.method("createSlug", function createSlug(payload) {
    //creating slug
    const slug = (0, slugify_1.default)(`${payload.name}`, {
        lower: true,
    });
    return slug;
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
