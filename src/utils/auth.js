import { hash , compare } from "bcryptjs";
import { sign , verify } from "jsonwebtoken";

// hash password
const hashPassword = async (password)=>{
    const hashedPassword = await hash(password , 12);
    return hashedPassword
};
// verify Password
const verifyPassword = async (password , hashedPassword)=>{
    const isValid = await compare(password , hashedPassword)
    return isValid
}
// generate Access Token 
const generateAccessToken = (data)=>{
    const token = sign({...data} , process.env.ACCESS_TOKEN,{
        expiresIn : "60d"
    });
    return token
};
// verify Access Token
const verifyAccessToken = (data)=>{
    try{
        const tokenPayload = verify(token , process.env.ACCESS_TOKEN);
        return tokenPayload
    } catch(error){
        console.log("Verify Access Token is Error" , error)
    }
};
// generate Refresh Token 
const generateRefreshToken = (data)=>{
    const token = sign({...data} , process.env.REFRESH_TOKEN,{
        expiresIn:"15d",
    })  ;
    return token
};
// Validation Email
const validationEmail = (email)=>{
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/g;
    return pattern.test(email)
};
// Validation Password
const validationPassword = (password)=>{
    const pattern =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
};
// Validation Phone
const validationPhone = (phone)=>{
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone)
}

export{
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validationEmail,
    validationPhone,
}