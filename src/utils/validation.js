
import JOI from "joi"

export class Validators{
    constructor(){}

    static registerSchema = JOI.object({
        name: JOI.string().min(3).max(20).alphanum().required(),
        password: JOI.string().min(8).max(16).required(),
        email: JOI.string().min(8).max(30).email().required()
    })

    static loginSchema = JOI.object({
        email: JOI.string().required(),
        password: JOI.string().min(8).max(16).required(),
    })
}