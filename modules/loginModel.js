// importing packages and libraries
import bcrypt from "bcrypt"

// Other file imports

import { userdetails } from "../models/userdetailsModel.js";
import { token } from "../tokenGenerator.js";

// Login api request

export const postlogin = async (request, response) => {
    try {
        const { emailid, password } = request.body;
        console.log("Email id is:", emailid);
        console.log("Password is:", password);

        // checking whether the user is already in db are not
        const checkUser = await userdetails.findOne({ emailid: emailid });
        console.log(checkUser);

        // if user is registered
        if (checkUser) {
            const storedPassword = checkUser.password;
            console.log("Stored Password is:", password);
            const checkPassword = await bcrypt.compare(password, storedPassword);

            // check the password
            if (checkPassword) {
                const { _id } = checkUser;
                console.log("_id is:", _id);
                const finalToken = await token({ _id });
                response.send({ message: "Token is", finalToken });
                return;
            }

            // if password is incorrect
            else{
                response.send({message:"Incorrect password"});
                return;
            }
        }

        // if not registred
        else {
            response.send({ message: "User is not registerd" });
            return;
        }

    } catch (error) {
        console.log("Error is:", error);
    }
}