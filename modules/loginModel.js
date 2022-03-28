// Other file imports

import { userdetails } from "../models/userdetailsModel.js";
import { token } from "../tokenGenerator.js";

// Login api request

export const postlogin = async (request, response) => {
    try {
        const { emailid, password } = request.body;
        console.log("emailid is:", emailid, "password is:", password)

        // checking whether the user is already in db are not
        const check = await userdetails.findOne({ emailid: emailid });
        console.log(check)

        // if user is registered
        if (check) {
            const { _id } = check;
            console.log(_id)
            const finalToken = await token({ _id })
            response.send({ message: "Token is", finalToken })

        }

        // if not registred
        else {
            response.send({ message: "User is not registerd" })
        }

    } catch (error) {
        console.log("error is:", error)
    }
}