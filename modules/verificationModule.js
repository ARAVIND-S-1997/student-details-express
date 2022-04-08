
import { userdetails } from "../models/signupModel.js";

export const verifyFunction =  async (request, response)=> {
    try {
        const { key } = request.params;
        console.log("Key value is:", key)
        const check = await userdetails.findOne({ password: key });
        console.log("check is:", check);
        if (check) {
            response.redirect(`http://localhost:3000/changepassword/${key}}`)
        }
        else {
            response.send({ message: "Can't change the password try again after sometimes" })
        }
    } catch (error) {
        console.log("Error is:", error);
    }

}