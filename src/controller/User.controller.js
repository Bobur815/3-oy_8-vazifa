import userService from "../service/User.service.js";

export class UserController {
    constructor() {}

    async getUser(req, res) {
        try {
            const users = await userService.getUser(req.query);
            res.status(200).json({ success: true, data: users });
        } catch (error) {
            res.status(500).json(
                { success: false, message: error.message }
            );
        }
    }

    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updated = await userService.updateUser(id, req.body);
            res.status(200).json({ success: true, data: updated });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const deleted = await userService.deleteUser(id);
            res.status(200).json({ success: true, data: deleted });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
