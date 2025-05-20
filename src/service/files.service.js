import fileModel from "../models/Files.model.js";
import { formatDate } from "../utils/CustomDate.js";
import { Validators } from "../utils/validation.js";
import path from "path";
import { NotFoundError } from "../utils/errors.js";

class FilesService {
    constructor() {}

    async getAllFiles(){
        const data = await fileModel.find().populate("user_id","-password")
        return data;
    }

    async getSingleUserFiles(search){
        const data = await fileModel.find(search).populate("user_id","-password")
        return data;
    }
    
    async uploadFile(data, file) {
        const { error } = Validators.fileSchema.validate(data);
        if (error) throw error;

        const fileExtension = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExtension}`;
        const fileSize = Math.round(file.size / 1024 / 1024); 
        const filePath = path.join(process.cwd(), "src", "uploads", fileName);

        await new Promise((resolve, reject) => {
            file.mv(filePath, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        const result = await fileModel.create({
            title: data.title,
            file_url: fileName,
            size: `${fileSize} MB`,
            user_id: data.user_id,
            createdAt: new Date()
        });

        return {
            ...result.toObject(),
            createdAtFormatted: formatDate(result.createdAt)
        };
    }

    async updateTitle(file_id,newTitle){
        const updatedFile = await fileModel.updateOne({_id:file_id},{$set:{title:newTitle}})

        if(updatedFile.modifiedCount){
            return "File title updated successfully"
        }
        throw new NotFoundError(404,`File with ID ${file_id} not found`)
    }
    async deleteFile(file_id){
        const deletedFile = await fileModel.deleteOne({_id:file_id})
        if(deletedFile.deletedCount){
            return "File deleted successfully"
        }
        throw new NotFoundError(404,`File with ID ${file_id} not found`)
    }
}

const fileService = new FilesService();
export default fileService;
