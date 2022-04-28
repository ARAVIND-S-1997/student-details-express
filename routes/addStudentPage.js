
import express from "express";
import { addNewStudentFunction } from "../modules/addStudentModule.js";
import { getAllStudentsFunction } from "../modules/getAllStudentsModule.js";
import { individualStudentFunction } from "../modules/getindividualStudentModule.js";
import { updateIndividualStudentFunction } from "../modules/updateIndividualStudentModule.js";

const router=express.Router();
export const addStudentPage=router;


// route for adding new student
router.post("/newstudent",addNewStudentFunction);

// route for get all students in a classroom
router.get("/getstudents/:id",getAllStudentsFunction);

// route for get individual students in a classroom
router.get("/getstudent/:id",individualStudentFunction);

// route to update an student data
router.post("/updatestudent/:id",updateIndividualStudentFunction);