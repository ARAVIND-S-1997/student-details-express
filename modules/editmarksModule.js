

import { createclassroom } from "../models/createClassroomModel.js";
import jwt from "jsonwebtoken";

export const editmarksFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token is (Edit marks function):", token);
        console.log("Email id is (Edit marks function):", emailid);

        const { id } = request.params;
        console.log("Id is (Edit marks function):", id);

        const { month, tamil, english, maths, science, social, total } = request.body;
        console.log("Month (Edit marks function)", month);
        console.log("Tamil (Edit marks function)", tamil);
        console.log("English (Edit marks function)", english);
        console.log("Maths (Edit marks function)", maths);
        console.log("Science (Edit marks function)", science);
        console.log("Social (Edit marks function)", social);
        console.log("Total (Edit marks function)", total);

        const check = jwt.verify(token, process.env.SECRET_KEY);

        if (check) {
            // const editmarks = await createclassroom.updateOne({emailid:emailid, "students.marks._id": id },
            //     {
            //         $set: {
            //             "marks.$.month": month,
            //             "marks.$.tamil": tamil,
            //             "marks.$.english": english,
            //             "marks.$.maths": maths,
            //             "marks.$.science": science,
            //             "marks.$.social": social,
            //             "marks.$.total": total
            //         }
            //     });
            response.status(200).send(editmarks);
        }
        else {
            response.status(400).send("Invalid autherization")
        }

    } catch (error) {
        console.log("Error is (Edit marks function) :", error)
    }



}