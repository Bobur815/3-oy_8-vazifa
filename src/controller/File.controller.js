import fileService  from "../service/files.service.js"

class FileController{
    constructor(){}

    async createFile(req,res,next){
        try {
            let dataFile = await fileService.uploadFile(req.body,req.files.profile_img)
            res.status(201).json({
                success: true,
                message: "Video successfully uploaded",
                data: dataFile
            });

        } catch (error) {
            next(error)
        }
    }
}

let fileController = new FileController()
export default fileController