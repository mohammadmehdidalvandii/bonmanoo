import connectToDB from "@/config/db";
import CategoryProductsModel from '@/models/CategoryProducts'

export async function POST (req){
    connectToDB();

    const body = await req.json();

    const {name} = body;

    await CategoryProductsModel.create({
        name
    });

    return Response.json(
        {message:"Created New Category-Product is successfully ✅"},
        {status:201},
    )

}

export async function GET (){
    connectToDB();
    const categoryProduct = await CategoryProductsModel.find({});
    return Response.json(categoryProduct)
}