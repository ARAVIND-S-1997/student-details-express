import mongoose from "mongoose";
import { signupSchema } from "../schema/signup.schema.js";

export const userdetails = mongoose.model("userdetails", signupSchema)