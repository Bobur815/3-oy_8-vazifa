import categoryService from "../service/Category.service.js";

export class CategoryController {
    constructor() {}

    async getCategory(req, res) {
        try {
            const categories = await categoryService.getCategory(req.query);
            res.status(200).json({ success: true, data: categories });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async createCategory(req, res) {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json({ success: true, data: category });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const updated = await categoryService.updateCategory(id, req.body);
            res.status(200).json({ success: true, data: updated });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async deleteCategory(req, res) {
        try {
            const { id } = req.params;
            const deleted = await categoryService.deleteCategory(id);
            res.status(200).json({ success: true, data: deleted });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
