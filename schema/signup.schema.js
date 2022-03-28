import mongoose from "mongoose";

const schema = mongoose.Schema;

export const signupSchema = new schema({
    firstname: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    lastname: {
        type: String,
        minLength: 1,
        maxlength: 20,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        minLength: 11,
        maxlength: 30,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        // minlength:8,
        // maxlength:12,
        required: true,
        // match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should have at least one uppercase letter, one lowercase letter, one number and one special character"]

    }
})
