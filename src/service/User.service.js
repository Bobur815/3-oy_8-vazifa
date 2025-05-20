import userModel from "../models/User.model.js";
import { ValidationError } from "../utils/errors.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js";
import path from "path"

class UserService {
    constructor() {}

    static generateToken(data) {
        return {
            accessToken: jwt.sign(data),
            refreshToken: jwt.signRef(data)
        };
    }

    async getAllusers() {
        const users = await userModel.find().select("-password");
        return users;
    }

    async createUser(data,files) {
        const oldUser = await userModel.findOne({ username: data.username });
        if (oldUser) {
            throw new ValidationError(409, "User already exists");
        }

        let filename = new Date().getTime() + "." + files.name;
        data.profile_img = filename;

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        const newUser = await userModel.create(data);
        delete newUser.password

        files.mv(path.join(process.cwd(),"src","uploads",filename), (error) => {
            if(error) throw error
        })

        return UserService.generateToken(newUser);
    }

    async login(data) {
        const user = await userModel.findOne({ username: data.username });
        if (!user) throw new ValidationError(403, "User not registered");

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new ValidationError(401, "Invalid password");

        return UserService.generateToken(data);
    }

    async updateUser(data) {
        const user = await userModel.findById(data.user_id);
        if (!user) {
            throw new ValidationError(404, "User not found");
        }

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        const updatedUser = await userModel.findByIdAndUpdate(data.user_id, data, {
            new: true
        });

        return updatedUser;
    }
}

const userService = new UserService();
export default userService;
