
import JOI from "joi"

export class Validators{
    constructor(){}

    static registerSchema = JOI.object({
        username: JOI.string().min(3).max(20).alphanum().required(),
        password: JOI.string().min(8).max(16).required()
    })

    static loginSchema = JOI.object({
        username: JOI.string().required(),
        password: JOI.string().min(8).max(16).required(),
    })

    static fileSchema = JOI.object({
        title: JOI.string().alphanum().min(2).max(30).required(),
        user_id: JOI.string().required()

    })
}