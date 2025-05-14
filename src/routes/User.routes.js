import { Router } from "express";
import userController from "../controller/User.controller.js";

const userRouter = Router();

userRouter      
    .post("/register", userController.createUser)

export default userRouter;
