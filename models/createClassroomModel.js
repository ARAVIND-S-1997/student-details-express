// importing packages and libraries
import mongoose from "mongoose";


const schema = mongoose.Schema

const createclassroomSchema = new schema({
    user: {
        type: String,
        min: 13,
        max: 30,
    },
    classname: {
        type: String,
        min: 1,
        max: 10,
    },
    section: {
        type: String,
        min: 1,
        max: 10,
    },
    students: [{
        name: {
            type: String,
            minlength: 3,
            maxlength: 20,
        },
        dob: {
            type: String,
        },
        emailid: {
            type: String
        },
        address: {
            type: String,
            maxlength: 60,
        },
        contactno: {
            type: Number
        },
        religion: {
            type: String,
        },
        marks: [{
            tamil: {
                type: Number
            },
            english: {
                type: Number
            },
            maths: {
                type: Number
            },
            science: {
                type: Number
            },
            social: {
                type: Number
            },
            total: {
                type: Number
            }
        }]
    }]
})
export const createclassroom = mongoose.model("classroom", createclassroomSchema)