// importing other packages and libraries
import express from "express";

// importing other files
import { createClassroomFunction } from "../modules/createClassroomModule.js";
import { getClassroomFunction } from "../modules/getclassroomModule.js";
import { userdetailsFunction } from "../modules/userdetailsModule.js";
import { edituserdetails } from "../modules/edituserdetailsModule.js";

// Login page router function
const router = express.Router();
export const homePage = router;


// for creating classroom
router.post("/createclassroom", createClassroomFunction);

// for get classroom
router.get("/myclassroom", getClassroomFunction);

// route to get user detail
router.get("/userdetails",userdetailsFunction);

// route for edit user detail
router.post("/edituserdetails",edituserdetails);