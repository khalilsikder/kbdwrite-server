import { model, Schema } from "mongoose";
import { TProduct, TProductMethods, TProductModel } from "./product.interface";

import slugify from "slugify";
import { format } from "path";

const productSchema = new Schema<TProduct, TProductModel, TProductMethods>({
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

productSchema.method("createSlug", function createSlug(payload: TProduct) {
  //creating slug
  const slug = slugify(`${payload.title}`, {
    lower: true,
  });

  return slug;
});

export const Product = model<TProduct, TProductModel>(
  "Product",
  productSchema
);
