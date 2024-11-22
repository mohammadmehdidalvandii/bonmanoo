import connectToDB from "@/config/db";
import MagazinesModel from '@/models/Magazines'

export async function POST (req){
    try {
       await connectToDB();

        const body  = await req.json();
        const {name} = body;

        if(!name){
            return Response.json(
                {message:"Name is Required "},
                {status:400}
            )  
        }
       const newMagazines =  await MagazinesModel.create({
            name,
        });

        return Response.json(
            {message:"Created Magazines Successfully", data:newMagazines},
            {status:201}
        )

    } catch(error){
        console.log("error=>", error)
        return Response.json(
            {message:"Error Server is Magazines =>", error},
            {status:500}
        )
    }
}

export async function GET (){
    connectToDB();
    const magazines = await MagazinesModel.find({});
    return Response.json(magazines)
}