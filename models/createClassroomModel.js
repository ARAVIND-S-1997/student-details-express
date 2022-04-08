// importing packages and libraries
import mongoose from "mongoose";


const schema=mongoose.Schema

const createclassroomSchema=new schema({
    user:{
        type:String,
        min:13,
        max:30,
        required:true
    },
    classname:{
        type:String,
        min:1,
        max:10,
        required:true        
    },
    section:{
        type:String,
        min:1,
        max:10,
        required:true
    }
})
export const createclassroom=mongoose.model("classroom",createclassroomSchema)