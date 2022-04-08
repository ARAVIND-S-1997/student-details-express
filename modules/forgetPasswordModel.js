// importing other packages and libraries
import { token } from "../tokenGenerator.js";

// other file imports
import { userdetails } from "../models/signupModel.js";
import { emailsender } from "../mail.js";


// forget password api call

export const forgetPasswordFunction = async (request, response) => {
    try {
        const { emailid } = request.body;
        console.log("Email id is:", emailid);
        const checkUser = await userdetails.findOne({ emailid });
        console.log("User details:", checkUser);
        if (checkUser) {
            const { _id } = checkUser;
            console.log("_id is:", _id);
            const tempPassword = await token({ _id });
            console.log("Temporary password is:", tempPassword);
            const updatePassword = await userdetails.updateOne({ emailid }, { $set: { password: tempPassword } });
            response.send({ message: "Temporary password got updated", updatePassword });

            // Password reset link
            const resetLink = `http://localhost:9000/user/verify/${tempPassword}`

            // email message
            const message = (
                `<p>Hai there 😊 link to reset the password</p>
      <a href=${resetLink}> Click here to reset your password </a>`
            );
            emailsender(emailid, message);

            return;
        }
        else {
            response.send({ message: "Email id is not registered" })
        }
    } catch (error) {
        console.log("Error is:", error);
    }


}