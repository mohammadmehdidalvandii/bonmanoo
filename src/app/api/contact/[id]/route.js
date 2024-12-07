import connectToDB from "@/config/db";
import ContactModel from '@/models/Contact';

export async function DELETE (req , {params}){
    try{
        connectToDB();

        const contactID = params.id;

        await ContactModel.findOneAndDelete({
            _id:contactID
        });

        return  Response.json(
            {message:"Contact Message Removed is Successfully ✅"},
            {status:200}
        )

    } catch(error){
        return Response.json(
            {message:"Error Contact Server =>", error},
            {status: 500}
        )
    }
}