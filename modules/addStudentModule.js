// importing other packages and libraries
import jwt from "jsonwebtoken";

// other file imports
import { createclassroom } from "../models/createClassroomModel.js";

// add student details api call
export const addNewStudentFunction = async (request, response) => {
    try {

        // header datas
        const { token, id } = request.headers;
        console.log("Token is:", token);
        console.log("Id is(add students function):", id)

        // body data
        const { name, dob, emailid, address, contactno, religion } = request.body;
        console.log("Name is:", name);
        console.log("dob is:", dob);
        console.log("Emailid is:", emailid);
        console.log("Address is", address);
        console.log("Contact number is:", contactno);
        console.log("Religion is:", religion);

        // verifying the token
        const verifyuser = jwt.verify(token, process.env.SECRET_KEY);

        // if token is verified successfully
        if (verifyuser) {

            // find the user object
            const checkStudent = await createclassroom.findOne({ _id: id });
            const { students } = checkStudent;
            console.log("Students are:", students)

            // adding new student
            const addStudentReq = await createclassroom.updateOne(
                { _id: id },
                { $push: { students: { name: name, dob: dob, emailid: emailid, address: address, contactno: contactno, religion: religion } } });
            response.send({ message: "New student added successfully", addStudentReq });
        }

        // if token is not verified successfully
        else {
            response.send({ message: "Invalid token" });
        }
    } catch (error) {
        console.log("Error is ( addNewStudentFunction):", error);
    }
}

