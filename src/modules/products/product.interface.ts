import { Model } from "mongoose";

export type TProduct = {
    releaseDate(releaseDate: any, arg1: string): unknown;
    title:string;
    brand:string;
    availableQuantity:number;
    description:string;
    image:string;
    price:number;
    ratting:number;
    slug:string;
    };
    export type TProductMethods = {
      createSlug(payload:TProduct):string;
    }
    export type TProductModel = Model<TProduct,Record<string,unknown>,TProductMethods>