import connectToDB  from "@/config/db";
import WishlistModel from '@/models/Wishlist';

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {user , product} = body;

        const wish  = await WishlistModel.findOne({user , product});
        if(!wish){
            await WishlistModel.create({user , product});
        }

        return Response.json(
            {message:"Product Add To Wishlist Is successfully ✅"},
            {status:201}
        )

    } catch (error){
        return Response.json(
            {message:"Error Server wishlist" , error},
            {status:500}
        )
    }
}