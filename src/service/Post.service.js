import postModel from "../models/Post.model.js";

class PostService {
    constructor() {}

    async createPost(data) {
        try {
            const post = await postModel.create(data);
            return post;
        } catch (error) {
            throw new Error("Failed to create post: " + error.message);
        }
    }

    async getPost(filter = {}) {
        try {
            const posts = await postModel.find(filter);
            return posts;
        } catch (error) {
            throw new Error("Failed to fetch posts: " + error.message);
        }
    }

    async updatePost(id, updateData) {
        try {
            const updated = await postModel.findByIdAndUpdate(id, updateData, { new: true });
            return updated;
        } catch (error) {
            throw new Error("Failed to update post: " + error.message);
        }
    }

    async deletePost(id) {
        try {
            const deleted = await postModel.findByIdAndDelete(id);
            return deleted;
        } catch (error) {
            throw new Error("Failed to delete post: " + error.message);
        }
    }
}
let postService = new PostService()
export default postService;
