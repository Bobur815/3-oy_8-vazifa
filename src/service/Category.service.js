import categoryModel from "../models/Category.model.js";

class CategoryService {
    constructor() {}

    async createCategory(data) {
        try {
            const category = await categoryModel.create(data);
            return category;
        } catch (error) {
            throw new Error("Failed to create category: " + error.message);
        }
    }

    async getCategory(filter = {}) {
        try {
            const categories = await categoryModel.find(filter);
            return categories;
        } catch (error) {
            throw new Error("Failed to fetch categories: " + error.message);
        }
    }

    async updateCategory(id, updateData) {
        try {
            const updated = await categoryModel.findByIdAndUpdate(id, updateData, { new: true });
            return updated;
        } catch (error) {
            throw new Error("Failed to update category: " + error.message);
        }
    }

    async deleteCategory(id) {
        try {
            const deleted = await categoryModel.findByIdAndDelete(id);
            return deleted;
        } catch (error) {
            throw new Error("Failed to delete category: " + error.message);
        }
    }
}
let categoryService = new CategoryService()
export default categoryService;
