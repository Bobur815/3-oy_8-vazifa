
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {type:String, unique:true, required:true},
    password: {type: String, min:8, required:true},
    isvalid:{type: Boolean, default:false}
},{strict:true})

const userModel = model("User",userSchema)

export default userModel