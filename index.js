// Other imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
// files imports

import {mongoconnection} from "./mongoconnection.js"
import{loginPage} from "./routes/loginPage.js"





await mongoconnection();
const app = express();
const port = process.env.PORT;
app.listen(port, () => { console.log("App is running at port 9000") })


// middleware
app.use(express.json());
app.use("/user",loginPage);

