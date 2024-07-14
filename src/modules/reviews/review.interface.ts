import { ObjectId } from "mongoose";


export type TReview = {
    product: ObjectId;
    rating:number;
    comment:string;

}