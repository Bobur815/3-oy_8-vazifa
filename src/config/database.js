import mongoose from "mongoose";

export async function connectDB() {
    const uri = process.env.MONGO_URL;
    if (!uri) {
        console.error("❌ MONGO_URL is not defined in environment variables");
        process.exit(1); // stop the app
    }

    await mongoose.connect(uri)
        .then(() => console.log("✅ MongoDB connected!"))
        .catch((error) => {
            console.error("MongoDB connection error:", error.message);
            process.exit(1);
        });
}
