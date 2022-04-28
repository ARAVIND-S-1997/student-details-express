// importing packages and libraries
import jwt from "jsonwebtoken";


// Other file imports
import { createclassroom } from "../models/createClassroomModel.js";


// get individual student information api call
export const individualStudentFunction = async (request, response) => {
    try {

        // params data
        const { id } = request.params;
        console.log("Id is(individual student detail function):", id);

        // headers data
        const { token,email } = request.headers;
        // console.log("Token is(individual student detail function):", token);

        // verifying the token
        const check = jwt.verify(token, process.env.SECRET_KEY);

        // if token was true
        if (check) {
            console.log("token is verified")
            const getStudentReq = await createclassroom.findOne({user:email, students: { $elemMatch: { _id: id } } });
            const{students}=getStudentReq;
            response.send( students );
        }
        // if token was false
        else {
            response.send({ message: "Invalid token" });
        }
    } catch (error) {
        console.log("Error is (individual student detail function):", error);
    }
}