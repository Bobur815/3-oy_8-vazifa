import { Router } from "express";
import fileController from "../controller/File.controller.js";

const fileRouter = Router()


fileRouter
    .post("/upload",fileController.createFile)


export default fileRouter