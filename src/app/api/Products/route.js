import connectToDB from "@/config/db";
import ProductsModel from '@/models/Products';
import path from 'path';
import { writeFile ,mkdir } from "fs/promises";

export async function POST (req){
    try{
        connectToDB();

        const formData = await req.formData();

        const titleEn  = formData.get("titleEn");
        const name  = formData.get("name");
        const category  = formData.get("category");
        const typeProduct  = formData.get("typeProduct");
        const subProduct  = formData.get("subProduct");
        const description  = formData.get("description");
        const model  = formData.get("model");
        const method  = formData.get("method");
        const growRegion  = formData.get("growRegion");
        const taste  = formData.get("taste");
        const sweet  = formData.get("sweet");
        const liquid  = formData.get("liquid");
        const acidity  = formData.get("acidity");
        const software  = formData.get("software");
        const packaging  = formData.get("packaging");
        const subModel  = formData.get("subModel");
        const materials  = formData.get("materials");
        const height  = formData.get("height");
        const caffeine  = formData.get("caffeine");
        const beforeTaste  = formData.get("beforeTaste");
        const scent  = formData.get("scent");
        const roastCurry  = formData.get("roastCurry");
        const bitterness  = formData.get("bitterness");
        const dimensionsPack  = formData.get("dimensionsPack");
        const create  = formData.get("create");
        const tags  = formData.get("tags");
        const img  = formData.getAll("img[]");


        // not Exist  File Uploads 
        const uploadsDir = path.join(process.cwd() , "public/uploads");
        await mkdir(uploadsDir , {recursive:true});

        // Save Images 
        const imgUrls = [];
        for (const file of img){
            const bufferImg = Buffer.from(await file.arrayBuffer());
            const fileName = Date.now() + path.extname(file.name);
            const imgPath = path.join(uploadsDir , fileName);
            await writeFile(imgPath ,bufferImg);
            imgUrls.push(`http://localhost:3000/uploads/${fileName}`);
        };

        const product = await ProductsModel.create({
            titleEn,
            name,
            category,
            typeProduct,
            subProduct,
            description,
            model,
            method,
            growRegion,
            taste,
            sweet,
            liquid,
            acidity,
            software,
            packaging,
            subModel,
            materials,
            height,
            caffeine,
            beforeTaste,
            scent,
            roastCurry,
            bitterness,
            dimensionsPack,
            create,
            tags,
            img:imgUrls,
        });

        return Response.json(
            {message:"Created Product is Successfully ✅", data:product},
            {status:201}
        )


    } catch(error){
        console.log("error=>" ,error)
        return Response.json(
            {message:"Error Products is server " , error},
            {status:500}
        );
    }
}

export async function GET (){
    connectToDB();
    const products = await ProductsModel.find({});
    return Response.json(products);
}