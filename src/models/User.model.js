
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {type:String, required:true},
    password: {type: String, min:8, required:true},
    email:{type:String, unique:true, match:/@/}
},{strict:true})

const userModel = model("User",userSchema)

export default userModel