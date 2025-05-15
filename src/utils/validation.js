
import JOI from "joi"

export class Validators{
    constructor(){}

    static registerSchema = JOI.object({
        username: JOI.string().min(3).max(20).alphanum().required(),
        password: JOI.string().min(8).max(16).required()
    })

    static loginSchema = JOI.object({
        email: JOI.string().required(),
        password: JOI.string().min(8).max(16).required(),
    })
}