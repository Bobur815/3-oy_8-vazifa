import { Router } from "express";
import { UserController } from "../controller/User.controller.js";

const userRouter = Router();
const controller = new UserController();

userRouter
    .get("/", controller.getUser.bind(controller))       
    .post("/", controller.createUser.bind(controller))   
    .put("/:id", controller.updateUser.bind(controller))
    .delete("/:id", controller.deleteUser.bind(controller)); 

export default userRouter;
