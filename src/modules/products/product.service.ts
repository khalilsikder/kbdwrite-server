import { TProduct } from "./product.interface";
import { Product} from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = new Product(payload);
  const slug = result.createSlug(payload);
  result.slug = slug;
  await result.save();
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};
const getProductBySlug = async (slug: string) => {
  const product = await Product.findOne({ slug: slug });
  return product;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductBySlug,
};
