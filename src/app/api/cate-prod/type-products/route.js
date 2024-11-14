import connectToDB from "@/config/db";
import TypeProductsModel from '@/models/TypeProducts';

export async function POST (req){
   try{
    connectToDB();

    const body = await req.json();
    const {name , categoryProduct} = body

    await TypeProductsModel.create({
        name ,
        categoryProduct,
    })

    return Response.json(
        {message:"Create TypeProducts successfully"} ,
        {status:201}
    )

   }catch(error){
    console.log("error typeProducts =>" ,error)
    return Response.json(
        {message:"Error TypeProducts SERVER"},
        {status:500},
    )
   }
}