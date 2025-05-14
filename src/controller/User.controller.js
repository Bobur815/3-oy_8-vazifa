import userService from "../service/User.service.js";
import jwt from "../utils/jwt.js";
import { Validators } from "../utils/validation.js";

class UserController {
    constructor() {}

    async createUser(req, res, next) {
        try {
            const {error} = Validators.registerSchema.validate(req.body)
            if(error){
                throw error
            }

            const user = await userService.createUser(req.body);
            const accessToken = jwt.sign({email: user.email})
            const refreshToken = jwt.signRef({email: user.email})

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