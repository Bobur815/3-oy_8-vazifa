import mongoose from "mongoose";
import "dotenv/config"

async function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB connected!"))
        .catch(err=> console.log(err))
}

export default connectDB