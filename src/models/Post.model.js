import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: String,
    body: String,
    user_id: {type: Schema.Types.ObjectId, ref: "User"},
    category_id: {type: Schema.Types.ObjectId, ref: "Category"}
})

const postModel = model("Post", postSchema)

export default postModel