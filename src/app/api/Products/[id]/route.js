import connectToDB from "@/config/db";
import ProductsModel from '@/models/Products';

export async function DELETE (req , {params}){
    connectToDB()

    const productsID = params.id

    await ProductsModel.findOneAndDelete({
        _id:productsID
    })
    
    return Response.json(
        {message:"Product Removed Successfully"},
        {status:200}
    )
}