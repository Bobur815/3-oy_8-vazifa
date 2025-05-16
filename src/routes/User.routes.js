import { Router } from "express";
import userController from "../controller/User.controller.js";

const userRouter = Router();

userRouter  
    .get("/",userController.getAllUsers)    
    .post("/register", userController.register)
    .post("/login",userController.login)

export default userRouter;

