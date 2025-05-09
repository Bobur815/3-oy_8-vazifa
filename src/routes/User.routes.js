import { Router } from "express";
import userController from "../controller/User.controller.js";

const userRouter = Router()

userRouter
        .get("/:userId",userController.getOneUser)
        .get("/",userController.getAllUser)
        .post("/",userController.createOneUser)
        .post("/many",userController.createManyUser)
        .put("/",userController.updateUser)



export default userRouter;