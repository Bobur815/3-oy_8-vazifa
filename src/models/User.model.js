import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {type:String, unique:true,required:true},
    age: {type: Number, min:12},
    email:{type:String, unique:true, match:/@/},
    role: {type:String, enum:["Teacher","Student","Admin"]}
},{strict:true})

const userModel = model("User",userSchema)

export default userModel