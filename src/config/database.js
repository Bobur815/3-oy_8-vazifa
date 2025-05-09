import { MongoClient } from "mongodb";
import "dotenv/config"

let db;

async function connectDB(){
    try {
        let client = await new MongoClient(process.env.MONGO_URL)
        db = client.db("vazifa_1")
        console.log("MongoDB ulandi");
    } catch (error) {
        console.log("Xatolik", error);
    }
}
await connectDB()

export default db