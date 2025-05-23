import userModel from "../models/User.model.js";
import { NotFoundError, ValidationError } from "../utils/errors.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js";
import nodemailer from 'nodemailer'

class UserService {
    constructor() {}

    static generateToken(data) {
        return {
            accessToken: jwt.sign(data)
        };
    }

    async getAllusers() {
        const users = await userModel.find().select("-password");
        return users;
    }

    async createUser(data) {
        const oldUser = await userModel.findOne({ email: data.email });
        if (oldUser) {
            throw new ValidationError(409, "User already exists");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        const newUser = await userModel.create(data);

        let { accessToken }= UserService.generateToken({email:newUser.email});
        let url = `http://localhost:3000/api/users/confirm/${accessToken}`

        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "ergashevboburmirzo815@gmail.com",
              pass:"twnk gtcx wbae qjhm"
            }
          })
        
        let optionGmail = {
            from: "'Najot ta\'lim' <ergashevboburmirzo815@gmail.com>",
            to: data.email,
            subject: "Tasdiqlash linki",
            html: `
                <a href="${url}">Emailingizni tasdiqlang </a>
            `
        }

        await transport.sendMail(optionGmail)

        return "Emailingizga tasqidlash linki yuborildi"
    }

    async userConfirm(token){
        
        let {email} = jwt.verify(token)
        let user = await userModel.findOne({email})
        if(!user) throw new NotFoundError(404,"User not found")
        user.isvalid = true
        await user.save()

        return "Email successfully confirmed"
    }

    async login(data) {
        const user = await userModel.findOne({ email: data.email });
        if (!user) throw new ValidationError(403, "User not registered");

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new ValidationError(401, "Invalid password");

        if(!user.isvalid){
            throw new ValidationError(403,"Email not confirmed, please confirm email")
        }
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
