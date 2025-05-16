import fileModel from "../models/Files.model.js";
import { formatDate } from "../utils/CustomDate.js";
import { Validators } from "../utils/validation.js";
import path from "path";

class FilesService {
    constructor() {}

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
}

const fileService = new FilesService();
export default fileService;
