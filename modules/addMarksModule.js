

import { createclassroom } from "../models/createClassroomModel.js";
import jwt from "jsonwebtoken";

export const addmarksFunction = async (request, response) => {
    try{
        const { token } = request.headers;
        console.log("Token is(Add marks functionality):", token);

        const { id } = request.params;
        console.log("Id is(Add marks functionality):", id);

        const { tamil, english, maths, science, social,total } = request.body;
        console.log("Tamil (Add marks functionality)", tamil);
        console.log("English (Add marks functionality)", english);
        console.log("Maths (Add marks functionality)", maths);
        console.log("Science (Add marks functionality)", science);
        console.log("Social (Add marks functionality)", social);
        console.log("Total (Add marks functionality)", total);
        const check = jwt.verify(token, SECRET_KEY);
        if (check) {
    
        }
    }catch(error){
        console.log("Error is(Add marks functionality):",error)
    }
    

}