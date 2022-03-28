import express from "express";
import { signupFunction } from "../modules/signup.module.js";
const router=express.Router();
export const signupRouter=router;

router.post("/signup",signupFunction)