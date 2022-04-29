// importing other packages and libraries
import jwt from "jsonwebtoken";

// importing other files
import { userdetails } from "../models/signupModel.js";

export const edituserdetails = async (request, response) => {
    try {
        const { token, email } = request.headers;
        console.log("Token (Edit user details function) :", token);
        console.log("Email id (Edit user details function):", email);

        const { firstname, lastname, dob, emailid } = request.body;
        console.log("First name(Edit user details function):", firstname);
        console.log("Last name(Edit user details function):", lastname);
        console.log("Date of birth(Edit user details function):", dob);
        console.log("Email address(Edit user details function):", emailid);


        // verifying token
        const check = jwt.verify(token, process.env.SECRET_KEY);

        // if verification was true
        if (check) {
            const updateReq = await userdetails.updateOne({ emailid: email }, {firstname:firstname,lastname:lastname,dob:dob,emailid:emailid});
            response.status(200).send(updateReq);
            return;
        }

        // if verification was false
        else {
            response.status(400).send("Invalid token");
        }
    } catch (error) {
        console.log("Error (Edit user details function) :", error)
    }
}