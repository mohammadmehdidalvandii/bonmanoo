import connectToDB from "@/config/db";
import { isValidObjectId } from "mongoose";
import SubProductsModel from '@/models/SubProducts';

export  async function GET (req , {params}){
    try{
        connectToDB();

        const id = params.id;
        if(!isValidObjectId(id)){
            return Response.json(
                {message : "ID is Not Valid"},
                {status : 422},
            )
        };

        const subProducts = await SubProductsModel.find({typeProduct: id});
        return Response.json(
            {subProducts},
            {status:200}
        )

    } catch(error){
        return Response.json(
            {message:"Error Get SubProduct", error},
            {status:500}
        )
    }
}