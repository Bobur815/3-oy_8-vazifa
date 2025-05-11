import userModel from "../models/User.model.js";

class UserService {
    constructor() {}

    async createUser(data) {
        try {
            const user = await userModel.create(data);
            return user;
        } catch (error) {
            throw new Error("User yaratishda xatolik: " + error.message);
        }
    }

    async getUser(filter = {}) {
        try {
            const users = await userModel.find(filter);
            return users;
        } catch (error) {
            throw new Error("Userlarni chiqarishda xatolik: " + error.message);
        }
    }

    async updateUser(id, updateData) {
        try {
            const updated = await userModel.findByIdAndUpdate(id, updateData, { new: true });
            return updated;
        } catch (error) {
            throw new Error("User o'zgartirishda xatolik: " + error.message);
        }
    }

    async deleteUser(id) {
        try {
            const deleted = await userModel.findByIdAndDelete(id);
            return deleted;
        } catch (error) {
            throw new Error("Userni o'chirishda xatolik: " + error.message);
        }
    }
}
let userService = new UserService()
export default userService;
