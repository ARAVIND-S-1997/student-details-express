
import { createclassroom } from "../models/createClassroomModel.js";
import jwt from "jsonwebtoken";

export const deletestudentFunction=async(request,response)=>{
    try{
        const{token,emailid,classroomid}=request.headers;
        console.log("Token (Delete student function):",token);
        console.log(emailid);
        console.log(classroomid);
        const{id}=request.params;
        console.log("Id (Delete student function) :",id);

        const check=jwt.verify(token,process.env.Secret_key);
        if(check){
            const deleteReq=await createclassroom.updateOne({},{$pull:{students:{_id:id}}});
            // if(deleteReq){
            //     const findStu=await createclassroom.findOne({"students.id":classroomid});
            //     response.status(200).send(findStu)
            //  }
            }
            else{
                response.status(400).send("Ivalid token")
            }

    }catch(error){
        console.log("Error is (Delete student function):",error);
    }
}