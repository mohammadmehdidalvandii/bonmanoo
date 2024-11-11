import mongoose from "mongoose";

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            return true
        } else{
            await mongoose.connect(process.env.DATA_DB);
            console.log("Connect TO DB is Successfully ✅")
        }
    } catch(error){
        console.log("DB Connections Has Error" , error)
    }
}