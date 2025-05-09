import { Router } from "express";
import UserController from "../controller/User.controller.js";

const userRouter = Router()
const controller = new UserController()

userRouter
        .get('/',controller.getAllUser.bind(controller))
        .get('/:userId',controller.getOneUser.bind(controller))
        .post('/',controller.postOneUser.bind(controller))
        .post('/many/',controller.postManyUser.bind(controller))
        .delete('/:userId',controller.deleteUser.bind(controller))
        .put('/:userId',controller.putUser.bind(controller))


export default userRouter;