// packages imports 
import jwt from "jsonwebtoken";

// other  imports
import { createclassroom } from "../models/createClassroomModel.js";



// delete marks function

export const deletemarksFunction = async (request, response) => {
    try {
        const { token, emailid,student_id } = request.headers;
        console.log("Token  ( Delete mark function) :", token);
        console.log("Email id  ( Delete mark function):", emailid);
        console.log("student id  ( Delete mark function):", student_id);

        const { id } = request.params;
        console.log("Id is:", id);
        
        const check = jwt.verify(token, process.env.SECRET_KEY);

        if (check) {
            // delete marks
            const removemarks = await createclassroom.updateMany({ user: emailid ,"students._id":student_id}, 
            { $pull: {"students.$.marks":{_id:id}  } });
            
            if(removemarks.modifiedCount===1){

                // find student details
                const getStudentReq = await createclassroom.findOne({user:emailid, students: { $elemMatch: { _id:student_id } } });
                const{students}=getStudentReq;
                response.send( students );
            }
          
        }

    } catch (error) {
        console.log("Error ( Delete mark function):", error);
    }
}