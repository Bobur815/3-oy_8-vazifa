import { NotFoundError, ValidationError } from "../utils/errors.js";
import jwt from "../utils/jwt.js";

export default (req,res,next) => {
    try {
        const {token} = req.headers;
        if(!token){
            throw new NotFoundError(404,"Token is required!")
        }

        let {username} = jwt.verify(token)
        if(!username){
            throw new ValidationError(404,"Username is not found")
        }
        next()
    } catch (error) {
        next(new ValidationError(400,"Invalid token"))
    }
}