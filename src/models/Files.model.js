
import { Schema, model } from "mongoose";

const FileSchema = new Schema({
    title: { type: String, required: true },
    file_url: { type: String, required: true }, 
    size: String,
    user_id: {type: Schema.Types.ObjectId, ref: "User", required:true},
    createdAt: {type: Date, default: Date.now}
},{strict:true})

let fileModel = model("File", FileSchema)

export default fileModel