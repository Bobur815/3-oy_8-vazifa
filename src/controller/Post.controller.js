import postService from "../service/Post.service.js";

export class PostController {
    constructor() {}

    async getPost(req, res) {
        try {
            const posts = await postService.getPost(req.query);
            res.status(200).json({ success: true, data: posts });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async createPost(req, res) {
        try {
            const post = await postService.createPost(req.body);
            res.status(201).json({ success: true, data: post });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async updatePost(req, res) {
        try {
            const { id } = req.params;
            const updated = await postService.updatePost(id, req.body);
            res.status(200).json({ success: true, data: updated });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params;
            const deleted = await postService.deletePost(id);
            res.status(200).json({ success: true, data: deleted });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
