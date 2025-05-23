
import JOI from "joi"

export class Validators{
    constructor(){}

    static registerSchema = JOI.object({
        email: JOI.string().min(3).email().required(),
        password: JOI.string().min(8).max(16).required()
    })

    static loginSchema = JOI.object({
        email: JOI.string().email().required(),
        password: JOI.string().min(8).max(16).required(),
    })
}