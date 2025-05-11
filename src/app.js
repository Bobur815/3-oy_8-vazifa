import express from "express";
import { connectDB } from "./config/database.js";
import "dotenv/config";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

routes(app);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running ... ');
    });
}).catch(err => {
    console.error("Failed server:", err.message);
});
