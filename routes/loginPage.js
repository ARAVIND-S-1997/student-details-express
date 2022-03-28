// importing other packages and libraries

import express from "express";

// importing other files

import { postlogin } from "../modules/loginModel.js";
import { signupFunction } from "../modules/signupModule.js";

// Login page router function
const router=express.Router()
export const loginPage=router

// for login
router.post("/login",postlogin);

// for signup
router.post("/signup",signupFunction)
