// importing other packages and libraries
import jwt from "jsonwebtoken";

// importing other files
import { userdetails } from "../models/signupModel.js";

// user detail function
export const userdetailsFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token (user details function) :", token);
        console.log("Email id (user details function):", emailid);

        // verifying token
        const check = jwt.verify(token, process.env.SECRET_KEY);

        // if verification was true
        if (check) {
            const findReq = await userdetails.findOne({ emailid: emailid }, { password: 0 });
            response.status(200).send(findReq);
            return;
        }

        // if verification was false
        else {
            response.status(400).send("Invalid token");
        }
    } catch (error) {
        console.log("Error (user details function) :", error)
    }

}