// importing packages and libraries

import jwt from "jsonwebtoken";

// Other file imports

import { createclassroom } from "../models/createClassroomModel.js";
import { userdetails } from "../models/signupModel.js";

// create classroom api function

export const createClassroomFunction = async (request, response) => {
    try {
        const { emailid, token } = request.headers;
        console.log("Emailid is(create classroom):", emailid);
        console.log("Token is(create classroom):", token);

        // verify token
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        // if valid token
        if (verifyToken) {

            // find the registered user
            const check = await userdetails.findOne({ emailid });

            // if user already registered
            if (check) {
                const data = new createclassroom({
                    classname: request.body.classname,
                    section: request.body.section,
                    user: emailid,
                });
                const operation = await data.save();
                response.send({ message: "Operation executed successfully", operation })
            }

            // if user not registerd
            else{
                response.send({message:"User doesn't exist"})
            }
        }

        // if invalid token
        else {
            response.send({ message: "Invalid token" });
        }
    } catch (errors) {
        console.log("Error is(create classome):", errors)
    }
}