import jwt from "jsonwebtoken";

import { createclassroom } from "../models/createClassroomModel.js";

export const getClassroomFunction = async (request, response) => {
    try {
        const { emailid, token } = request.headers;
        console.log("Email id is(get classroom):", emailid);
        console.log("Token is(get classroom):", token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        if (verifyToken) {
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