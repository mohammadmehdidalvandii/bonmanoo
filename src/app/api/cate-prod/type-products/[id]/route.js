import connectToDB from "@/config/db";
import { isValidObjectId } from "mongoose";
import TypeProductsModel from '@/models/TypeProducts';

export async function GET (req , {params}){
    try{
        connectToDB()

        const id= params.id;
        if(!isValidObjectId(id)){
            return Response.json(
                {message:"ID is Not valid"},
                {status:422}
            );
        };


        const typeProducts = await TypeProductsModel.find({categoryProduct:id})

        return Response.json(
            {typeProducts},
            {status:200}
        )

    } catch(error){
        return Response.json(
            {message:"Error Get TypeProducts server"},
            {status:500}
        )
    }
}