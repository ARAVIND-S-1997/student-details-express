// importing packages and libraries

import mongoose from "mongoose";

// schema imports

import { signupSchema } from "../schema/signup.schema.js";

// models

export const userdetails = mongoose.model("userdetails", signupSchema)