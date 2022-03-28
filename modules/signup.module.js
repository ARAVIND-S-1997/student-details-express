
import { userdetails } from "../models/models.js";
import { passwordGenerator } from "../password.generator.js";

export const signupFunction = async (request, response) => {
    try {
        const check = await signup.findOne({ emailid: request.body.emailid })
        if (check) {
            response.send("email id already exist")
            return;
        }
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

