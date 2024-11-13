import connectToDB from "@/config/db";
import SubProductsModel from '@/models/SubProducts';

export async function POST (req){
    try{
         connectToDB();
        const body = await req.json();
    
        const {name ,typeProduct} = body;
    
        await SubProductsModel.create({
            name,
            typeProduct,
        })
    
        return Response.json(
            {message:"Created TypeProducts successfully"},
            {status:201},
        )
    } catch(error){
        console.log("error server typeProducts =>" ,error)
        return Response.json(
            {message:"server TypeProducts Error" ,error},
            {status:500}
        )
    }
}