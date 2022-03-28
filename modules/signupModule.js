// other file imports

import { userdetails } from "../models/userdetailsModel.js";
import { passwordGenerator } from "../password.generator.js";

// signup api call

export const signupFunction = async (request, response) => {
    try {
        // finding whether the user is present or not

        const check = await userdetails.findOne({ emailid: request.body.emailid })

        // if user is already registered

        if (check) {
            response.send("email id already exist")
            return;
        }
        // if not
        
        else {
            const { password } = request.body;
            console.log("password is:", password)
            const finalPassword = await passwordGenerator(password);
            const data = new userdetails({
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                dob: request.body.dob,
                emailid: request.body.emailid,
                password: finalPassword
            });
            const opertion = await data.save();
            response.send(opertion);
        }

    } catch (error) {
        console.log(error)
    }

}

