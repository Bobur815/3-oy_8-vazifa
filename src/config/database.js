import mongoose from "mongoose";
import "dotenv/config";

export  async function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log("MongoDB connected!"))
        .catch(error => console.log(error))
}
