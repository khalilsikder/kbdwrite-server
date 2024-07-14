import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    message: "product is create successfull",
    data: result,
  });
};
const getAllProducts = async (req: Request, res: Response) => {
  try{
    const result = await ProductServices.getAllProducts();
  res.status(200).json({
    success: true,
    message: "product is fetch successfull",
    data: result,
  });
  }catch(err:any){
    res.status(500).json({
        success: false,
        message: "could not  is fetch moves",
        error: err,
      });
  }
};
const getProductBySlug = async (req: Request, res: Response) => {
  try{
    const {slug} = req.params;
    const result = await ProductServices.getProductBySlug(slug);
  res.status(200).json({
    success: true,
    message: "product is fetch successfull",
    data: result,
  });
  }catch(err:any){
    res.status(500).json({
        success: false,
        message: "could not  is fetch moves",
        error: err,
      });
  }
};

export const productControllers = {
createProduct,
getAllProducts,
getProductBySlug,
}
