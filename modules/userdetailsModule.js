// importing other packages and libraries
import jwt from "jsonwebtoken";

// importing other files
import { userdetails } from "../models/signupModel.js";

// user detail function
export const userdetailsFunction=async(request,response)=>{

    const{token,emailid}=request.headers;
    console.log("Token (user details function) :",token);
    console.log("Email id (user details function):",emailid);

    // verifying token
    const check = jwt.verify(token, process.env.SECRET_KEY);

    // if verification was true
    if(check){
        const findReq=await userdetails.findOne({emailid:emailid},{password:0});
        response.status(400).send(findReq);
    }
    
    // if verification was false
    else{
        response.status(400).send("Invalid token");
    }
}