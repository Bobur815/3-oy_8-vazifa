import { Router } from "express";
import fileController from "../controller/File.controller.js";
import checkToken from "../middleware/checkToken.js";

const fileRouter = Router()


fileRouter
    .get("/all",fileController.getAll)
    .get("/single/:userId",fileController.getSingleFiles)
    .post("/upload",checkToken,fileController.createFile)
    .delete("/:file_id",checkToken, fileController.deleteOneFile)
    .put("/update",checkToken, fileController.changeTitle)


export default fileRouter