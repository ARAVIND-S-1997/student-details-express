// importing other files

import { userdetails } from "../models/signupModel.js";
import { passwordGenerator } from "../password.generator.js";

// change password api call

export const changePasswordFunction = async (request, response) => {
    try {
        const { token } = request.headers;
        const { newPassword } = request.body;
        console.log("Password is:", token);
        console.log("New password is:", newPassword);
        const checkuser = await userdetails.findOne({ password: token });
        console.log("User is:", checkuser);
        if (checkuser) {
            const { emailid } = checkuser;
            console.log("Email id is:", emailid);
            const newHashedPassword = await passwordGenerator(newPassword);
            console.log("New hashed password:", newHashedPassword);
            const updatePassword = await userdetails.updateOne({ emailid }, { $set: { password: newHashedPassword } });
            response.send({ message: "Password got updated", updatePassword });
        }
        else {
            response.send({ message: "Can't find the user" });
        }
    } catch (error) {
        console.log("error is:", error);
    }

}