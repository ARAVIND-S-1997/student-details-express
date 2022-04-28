// importing other packages and libraries

import express from "express";

// importing other files

import { createClassroomFunction } from "../modules/createClassroomModule.js";
import { getClassroomFunction } from "../modules/getclassroomModule.js";

// Login page router function
const router = express.Router();
export const homePage = router;


// for creating classroom
router.post("/createclassroom", createClassroomFunction)

// for get classroom
router.get("/myclassroom", getClassroomFunction)