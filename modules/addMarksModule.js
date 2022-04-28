

import { createclassroom } from "../models/createClassroomModel.js";
import jwt from "jsonwebtoken";



export const addmarksFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token is(Add marks functionality):", token);

        const { id } = request.params;
        console.log("Id is(Add marks functionality):", id);

        const { month, tamil, english, maths, science, social, total } = request.body;
        console.log("Month (Add marks functionality)", month);
        console.log("Tamil (Add marks functionality)", tamil);
        console.log("English (Add marks functionality)", english);
        console.log("Maths (Add marks functionality)", maths);
        console.log("Science (Add marks functionality)", science);
        console.log("Social (Add marks functionality)", social);
        console.log("Total (Add marks functionality)", total);
        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {
            const addmarks = await createclassroom.updateOne({ emailid: emailid },
                { "students._id": id, $push: { marks: { month: month, tamil: tamil, english: english, maths: maths, science: science, social: social } } });
            response.status(200).send(addmarks);
        }
        else {
            response.status(400).send("Ivalid autherization")
        }

    } catch (error) {
        console.log("Error is(Add marks functionality):", error)
    }


}