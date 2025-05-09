import db from "../config/database.js";
import { ObjectId } from "mongodb";

class UserController{
    constructor (){}

    async getAllUser(req,res){
        try {
            let result = await db.collection("users").find().toArray();
            res.status(200).send({
                success: true,
                message: "Users found successfully",
                data: result
            })

        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }
    async getOneUser(req,res){
        try {
            let {userId} = req.params;
            let result = await db.collection("users").findOne({_id: new ObjectId(userId)});

            res.status(200).send({
                success: true,
                message: "User found successfully",
                data: result
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }

    async postOneUser(req,res) {
        try {
            const result = await db.collection('users').insertOne(req.body);
            res.status(201).send({
                success: true,
                message: "User created successfully",
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }
    
    async postManyUser(req, res) {
        try {
            const result = await db.collection('users').insertMany(req.body);
            res.status(201).send({
                success: true,
                message: `${result.insertedCount} users created successfully`,
                data: result
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }

    async deleteUser(req,res){
        try {
            let {userId} = req.params;
            const result = await db.collection('users').deleteOne({_id:new ObjectId(userId)})
            res.status(200).json({
                status:200,
                success:true,
                message: result
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }

    async putUser(req,res){
        try {
            let {userId} = req.params;
            const result = await db.collection('users').findOneAndUpdate(
                {_id: new ObjectId(userId)},
                {$set: req.body},
                { returnDocument: 'after'}
            )
            res.status(200).json({
                status:200,
                success:true,
                message: result
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.message
            });
        }
    }
}

export default UserController