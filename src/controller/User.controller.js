import userService from "../service/User.service.js";
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
        
            const result = await userService.createUser(req.body);

            res.status(201).json({
                success: true,
                message: "User successfully registered",
                data: result
            });

        } catch (error) {
            next(error)
        }
    }

    async confirmUser(req,res,next){
        try {
            console.log(req.params);
            let confirmation = await userService.userConfirm(req.params.token)
            res.status(200).send(confirmation)

        } catch (error) {
            next(error)
        }
    }

    async login(req,res,next){
        try {
            
            const {error} = Validators.loginSchema.validate(req.body)
            if(error) throw error

            const result  = await userService.login(req.body)

            res.status(201).json({
                success: true,
                message: "Logged in successfully",
                data: result
            });
            
        } catch (error) {
            next(error)
        }
    }

}

let userController = new UserController()

export default userController