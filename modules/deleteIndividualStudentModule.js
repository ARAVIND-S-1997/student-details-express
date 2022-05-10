// other imports
import { createclassroom } from "../models/createClassroomModel.js";

// packages imports
import jwt from "jsonwebtoken";

// delete students function
export const deletestudentFunction = async (request, response) => {
    try {
        const { token, emailid, classroomid } = request.headers;
        console.log("Token (Delete student function):", token);
        console.log("Email id (Delete student function):", emailid);
        console.log("Classroom id (Delete student function):", classroomid);

        const { id } = request.params;
        console.log("Id (Delete student function) :", id);

        const check = jwt.verify(token, process.env.Secret_key);
        if (check) {

            // delete student
            const deleteReq = await createclassroom.updateMany({ user: emailid },
                { $pull: { students: { _id: id } } });
            if (deleteReq.modifiedCount === 1) {

                // find students
                const findreq = await createclassroom.findOne({ _id: classroomid });
                response.status(200).send(findreq)
            }
        }
        else {
            response.status(400).send("Invalid token")
        }
    } catch (error) {
        console.log("Error is (Delete student function):", error);
    }
}