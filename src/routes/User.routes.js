import { Router } from "express";
import userController from "../controller/User.controller.js";

const userRouter = Router();

userRouter  
    .get("/",userController.getAllUsers)
    .get("/confirm/:token",userController.confirmUser)    
    .post("/register", userController.register)
    .post("/login",userController.login)

export default userRouter;

