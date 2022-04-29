

import jwt from "jsonwebtoken";
import { createclassroom } from "../models/createClassroomModel.js";

export const deleteclassroomFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        const { id } = request.params;
        console.log("Token is:", token);
        console.log("Email is:", emailid);
        const check = jwt.verify(token, process.env.Secret_key);
        if (check) {
            const deleteReq = await createclassroom.deleteOne({ _id: id });
            if (deleteReq) {
                const findReq = await createclassroom.find({ user: emailid });
                response.send(findReq)
            }
        } else {
            response.status(400).send("Invalid token")
        }
    } catch (error) {
        console.log(console.log("Error is(Delete classroom function):", error))
    }


}