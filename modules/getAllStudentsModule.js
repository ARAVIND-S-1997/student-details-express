import { createclassroom } from "../models/createClassroomModel.js";
import jwt from "jsonwebtoken";

export const getAllStudentsFunction = async (request, response) => {
    try {
        const { id } = request.params;
        console.log("Id is(get all students request):", id)
        const { token } = request.headers;
        console.log("Token is(get all students request):", token);
        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {
            const gettAllStud = await createclassroom.findOne({ _id: id });
            const{students}=gettAllStud;
            response.send({ message: "Student details are", students });
        }
    } catch (error) {
        console.log("Error is(get all students request):", error)
    }
}