import connectToDB from "@/config/db";
import ContactModel from '@/models/Contact';

export async function POST (req){
    try{
        connectToDB();
        
        const body = await req.json();

        const {
            username,
            phone,
            email,
            subject,
            message, } = body

            await ContactModel.create({
                username,
                phone,
                email,
                subject,
                message,
            });

            return Response.json(
                {message:"Contact Message is Successfully ✅"},
                {status:201}
            )

    } catch(error){
        console.log("error=>", error)
        return Response.json(
            {message:"Error Server Contact =>" , error},
            {status:500}
        )
    }
}