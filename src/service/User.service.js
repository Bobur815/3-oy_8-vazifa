import userModel from "../models/User.model.js";
import { ValidationError } from "../utils/errors.js";
import bcrypt from "bcrypt"

class UserService {
    constructor() {}

    async getAllusers(){
        const users = await userModel.find()
        return users;
    }
    
    async register(data) {
            const oldUser = await userModel.findOne({username:data.username});
            if(oldUser){
                throw new ValidationError(409,"User already exists")
            }

            const hashedPassword = await bcrypt.hash(data.password, 10);
            data.password = hashedPassword;

            let newUser = await userModel.create(data);
            return newUser
    }

}
let userService = new UserService()
export default userService;
