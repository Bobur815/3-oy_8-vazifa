import express from "express";
import { connectDB } from "./config/database.js";
import "dotenv/config";
import routes from "./routes/index.js";
import ErrorHandler from "./middleware/errorHandler.js";
import path from "path"
import fileUpload from "express-fileupload";
import logger from "./logs/log.js";
import nodemailer from "nodemailer"



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(fileUpload());
app.use(express.static(path.join(process.cwd(),"src","uploads")));

routes.forEach(({ url, funk }) => {
    app.use(`/api${url}`, funk);
  });

app.use(ErrorHandler);

!(async () => {
    try {
      await connectDB();
      app.listen(PORT, () =>
        console.log(`🚀 Server running on http://localhost:${PORT}`)
      );
      
    } catch (err) {
      logger.error("❌ Failed to start server: " + err.message);
      process.exit(1); 
    }
  })();
  
