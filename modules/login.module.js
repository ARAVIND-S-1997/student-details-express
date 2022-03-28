import { userdetails } from "../models/models.js";

export const postlogin = async (request, response) => {
    try {
        const { emailid, password } = request.body;
        console.log("emailid is:", emailid, "password is:", password)
        const check = await userdetails.findOne({ emailid: emailid });
        console.log(check)

    } catch (error) {
        console.log("error is:", error)
    }
}