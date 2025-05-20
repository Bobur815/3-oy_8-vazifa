import JWT from "jsonwebtoken";

export default {
    sign: (payload) => 
        JWT.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_ACCESS_EXPIRE }
        ),

    signRef: (payload) => 
        JWT.sign(
            { username: payload.username },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_REFRESH_EXPIRE }
        ),
    verify: (token) => 
        JWT.verify(token,process.env.JWT_SECRET_KEY)
}
