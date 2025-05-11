import { Router } from "express";
import { CategoryController } from "../controller/Category.controller.js";

const categoryRouter = Router();
const controller = new CategoryController();

categoryRouter
    .get("/", controller.getCategory.bind(controller))           
    .post("/", controller.createCategory.bind(controller))        
    .put("/:id", controller.updateCategory.bind(controller))      
    .delete("/:id", controller.deleteCategory.bind(controller)); 

export default categoryRouter;
