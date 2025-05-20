
import fileModel from "../models/Files.model.js";
import fileService  from "../service/files.service.js"
import { NotFoundError } from "../utils/errors.js";

class FileController{
    constructor(){}

    async getAll(req,res,next){
        try {
            let dataFiles;
            console.log(req.query);
            if(req.query){
                dataFiles = await fileService.getSingleUserFiles(req.query)
            }
            else dataFiles = await fileService.getAllFiles()

            res.status(200).json({
                success: true,
                message: "success",
                data: dataFiles
            });

        } catch (error) {
            next(error)
        }
    }

    async getSingleFiles(req,res,next){
        try {
            
            const result = await fileService.getSingleUserFiles({user_id:req.params.userId})
            res.status(200).json({
                success: true,
                message: "success",
                data: result
            });
        } catch (error) {
            next(error)
        }
    }   

    async createFile(req,res,next){
        try {
            let dataFile = await fileService.uploadFile(req.body,req.files.filename)
            res.status(201).json({
                success: true,
                message: "Video successfully uploaded",
                data: dataFile
            });

        } catch (error) {
            next(error)
        }
    }

    async changeTitle(req,res,next){
        try {
            let {file_id,newTitle} = req.body;
            const result = await fileService.updateTitle(file_id,newTitle)

            res.status(202).json({
                success: true,
                message:"success",
                msg:result
            })

        } catch (error) {
            next(error)
        }
    }
    async deleteOneFile(req,res,next){
        try {
            let file_id = req.params.file_id
            const result = await fileService.deleteFile(file_id)

            res.status(200).json({
                status:true,
                message: "success",
                deletedFile: result
            })

        } catch (error) {
            next(error)
        }
    }
}

let fileController = new FileController()
export default fileController