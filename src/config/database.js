import mongoose from "mongoose";

export  async function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log("MongoDB connected!"))
        .catch(error => console.log(error))
}
