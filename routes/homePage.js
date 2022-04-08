// importing other packages and libraries

import express from "express";

// importing other files

import { createClassroomFunction } from "../modules/createClassroomModule.js";

// Login page router function
const router=express.Router();
export const homePage=router;

router.post("/createclassroom",createClassroomFunction)