import { NextFunction,Request,RequestHandler,Response } from "express";


export const catchAsync = (fn:RequestHandler) =>{
   return async (req:Request,res:Response,next:NextFunction)=>{
    // try{
    //     fn(req, res, next);
    // }catch(error){
    //  console.log(error);
    //  res.status(500).json({
    //     success:false,
    //     message:'something went to wrong',
    //     error:error,
    //  })
    // }
    Promise.resolve(fn(req,res,next)).catch((error)=>{
        console.log(error);
        res.status(500).json({
            success:false,
            message:'could not fetch random keyboard',
            error:error
        });
    });
   };
};