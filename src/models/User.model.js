
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {type:String, unique:true, required:true},
    password: {type: String, min:8, required:true},
    profile_img: String
},{strict:true})

const userModel = model("User",userSchema)

export default userModel