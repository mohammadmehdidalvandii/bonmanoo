import connectToDB from "@/config/db";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from '@/models/Wishlist';

export async function DELETE (req , {params}){
    try{
        connectToDB();

        const user  = await authUser();

        if(!user){
            return Response.json(
                {message:"Please  Login first"},
                {status:401}
            )
        }

        const productID  = params.id;
        await WishlistModel.findOneAndDelete({
            user: user._id,
            product: productID
        });

        return Response.json(
            {message:"Product removed successfully"},
            {status:200}
        )


    } catch (error){
        return Response.json(
            {message : error},
            {status:500}
        )
    }
}