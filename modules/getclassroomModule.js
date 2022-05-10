// packages imports
import jwt from "jsonwebtoken";

// files imports
import { createclassroom } from "../models/createClassroomModel.js";

// get classroom function
export const getClassroomFunction = async (request, response) => {
    try {
        const { emailid, token } = request.headers;
        console.log("Email id is(get classroom):", emailid);
        console.log("Token is(get classroom):", token);

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        if (verifyToken) {
            // get classroom
            const getRequest = await createclassroom.find({ user: emailid });
            response.send({ message: "Requested details were found sucessfully", getRequest });
        }
        else {
            response.send({ message: "Invalid token" })
        }
    } catch (errors) {
        console.log("Error is(get classroom):", errors)
    }
}