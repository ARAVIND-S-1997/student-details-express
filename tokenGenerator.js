import jwt from "jsonwebtoken"

export async function token(value){
    console.log("vale is:",value)
    const genToken=await jwt.sign(value,process.env.SECRET_KEY);
    console.log("final token is :",genToken)
    return genToken

}

