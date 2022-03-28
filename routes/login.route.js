
import express from "express";
import { postlogin } from "../modules/login.module.js";

const router=express.Router()
export const loginrouter=router

router.post("/login",postlogin);
