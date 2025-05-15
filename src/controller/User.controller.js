import userService from "../service/User.service.js";
import jwt from "../utils/jwt.js";
import { Validators } from "../utils/validation.js";

class UserController {
    constructor() {}

    async getAllUsers(req,res,next){
        try {
            const users = await userService.getAllusers()
            res.status(200).json({
                message:"success",
                success:true,
                data:users
            })

        } catch (error) {
            next(error)
        }
    }
    async register(req, res, next) {
        try {
            const {error} = Validators.registerSchema.validate(req.body)
            if(error){
                throw error
            }

            const {img} = req.files;
            const filename = new Date().getTime() + "." + img.name;
            req.body.filename = filename;
            
            const user = await userService.createUser(req.body);

            const accessToken = jwt.sign({username: user.username})
            const refreshToken = jwt.signRef({username: user.username})

            res.status(201).json({
                success: true,
                message: "User successfully created",
                data: {
                    accessToken,
                    refreshToken
                }
            });

        } catch (error) {
            next(error)
        }
    }

}

let userController = new UserController()

export default userController