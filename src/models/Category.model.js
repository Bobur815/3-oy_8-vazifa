import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {type:String, unique:true, required: true}
},{strict:true})

const categoryModel = model("Category",categorySchema)

export default categoryModel

