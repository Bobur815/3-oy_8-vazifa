import { Schema, model } from "mongoose";

let userSchema = new Schema({
    username: {type: String, required: true, unique:true},
    age: {type: Number, required:true, min:14, max:120},
    email: {type:String, unique:true, match: /@/},
    role: {type: String, enum:["Teacher","Student","Admin"]}
},{strict:true})

let userModel = model("users",userSchema)

export default userModel