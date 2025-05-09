import userModel from "../models/User.model.js";

class UsersController {
    constructor(){}
    
    async getAllUser(req,res){
        try {
            let users = await userModel.find()

            res.status(200).json({
                status:200,
                success:true,
                data:users
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async getOneUser(req,res){
        try {
            let {userId} = req.params;

            let user = await userModel.findById(userId)

            res.status(200).json({
                status:200,
                success:true,
                data:user
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async createOneUser(req,res){
        try {
            let newUser = new userModel(req.body)
            newUser = await newUser.save()

            res.status(201).json({
                success:true,
                message: newUser
            })

        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async createManyUser(req,res){
        try {
            let newUsers = await userModel.create(req.body)

            res.status(201).json({
                success:true,
                message: newUsers
            })

        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async deleteUser(req,res){
        try {
            let {userId} = req.params;
            const result = await userModel.deleteOne({ _id: userId });

            if (result.deletedCount==0) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }

            res.status(200).json({
                success: true,
                message: "User deleted successfully"
            });

        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async updateUser(req,res){
        try {
            let {userId} = req.query;
            let updatedUser = await userModel.findByIdAndUpdate({_id:userId},req.body,{new:true})

            res.status(201).json({
                success:true,
                message:"User updated successfully",
                data: updatedUser
            })
            
        } catch (error) {
            
        }
    }

}

let userController = new UsersController()

export default userController