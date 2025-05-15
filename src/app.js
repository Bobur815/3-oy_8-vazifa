import express from "express";
import { connectDB } from "./config/database.js";
import "dotenv/config";
import routes from "./routes/index.js";
import ErrorHandler from "./middleware/errorHandler.js";
import path from "path"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(),"src","uploads")));

routes.forEach(({ url, funk }) => {
    app.use(`/api${url}`, funk);
  });

app.use(ErrorHandler);

!(async () => {
    try {
      await connectDB();
      app.listen(PORT, () => console.log("Server is running..."));
    } catch (err) {
      console.error("Failed to start server:", err.message);
      process.exit(1); 
    }
  })();
  
