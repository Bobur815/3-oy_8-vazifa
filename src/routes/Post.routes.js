import { Router } from "express";
import { PostController } from "../controller/Post.controller.js";

const postRouter = Router();
const controller = new PostController();

postRouter
    .get("/", controller.getPost.bind(controller))           
    .post("/", controller.createPost.bind(controller))      
    .put("/:id", controller.updatePost.bind(controller))     
    .delete("/:id", controller.deletePost.bind(controller)); 

export default postRouter;
