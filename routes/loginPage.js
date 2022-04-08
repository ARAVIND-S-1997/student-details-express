// importing other packages and libraries

import express from "express";

// importing other files

import { loginFunction } from "../modules/loginModel.js";
import { signupFunction } from "../modules/signupModule.js";
import { forgetPasswordFunction } from "../modules/forgetPasswordModel.js";
import { changePasswordFunction } from "../modules/changePasswordModule.js";
import { verifyFunction } from "../modules/verificationModule.js";

// Login page router function
const router=express.Router()
export const loginPage=router

// for login
router.post("/login",loginFunction);

// for signup
router.post("/signup",signupFunction);

// for forget password
router.post("/forgetpassword",forgetPasswordFunction);

// for verifying the token before reirecting to change password page
router.get("/verify/:key",verifyFunction);

// for change password
router.post("/changepassword",changePasswordFunction);