import { createclassroom } from "../models/createClassroomModel.js"
import jwt from "jsonwebtoken";

export const updateIndividualStudentFunction = async (request, response) => {

    try {
        const { token, email } = request.headers;
        console.log("Token is:", token);
        console.log("email id is:", email);

        const { id } = request.params;
        console.log("Id is:", id);

        // body data
        const { name, dob, emailid, address, contactno, religion } = request.body;
        console.log("Name is:", name);
        console.log("dob is:", dob);
        console.log("Emailid is:", emailid);
        console.log("Address is", address);
        console.log("Contact number is:", contactno);
        console.log("Religion is:", religion);

        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {
            const findUser = await createclassroom.findOne({ user: email });
            // console.log(findUser);
            const { students } = findUser;
            // console.log("students are:", students);
            const userIdent = students.find((data) => { return (data._id.toString() === id) })
            // console.log(userIdent);

            if (userIdent !== undefined) {
                const updateStudent = await createclassroom.updateOne({ "students._id": id },
                    {
                        $set: {
                            "students.$.name": name,
                            "students.$.dob": dob,
                            "students.$.emailid": emailid,
                            "students.$.address": address,
                            "students.$.contactno": contactno,
                            "students.$.religion": religion
                        }
                    });
                response.send(updateStudent);
            }


            // if (userIdent !== undefined) {
            //     const updateStudent = await createclassroom.aggregate([
            //         {
            //             $project: {
            //                 students: {
            //                     $map: {
            //                         input: "students",
            //                         as: "value",
            //                         in: {
            //                             $cond: {
            //                                 if: {
            //                                     $eq: [
            //                                         "$$value._id",
            //                                         id
            //                                     ]
            //                                 },
            //                                 then: {
            //                                     $set: {
            //                                         "$$value.name": name,
            //                                         "$$value.dob": dob,
            //                                         "$$value.emailid": emailid,
            //                                         "$$value.address": address,
            //                                         "$$value.contactno": contactno,
            //                                         "$$value.religion": religion
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }]);
            //     console.log(updateStudent);
            //     response.send(updateStudent);
            // }
        }
        else {
            response.send({ message: "Invalid token" });
        }
    } catch (error) {
        console.log("Error is (updateIndividualStudentFunction):", error);
    }

}