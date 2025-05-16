import express from "express";
import { connectDB } from "./config/database.js";
import "dotenv/config";
import routes from "./routes/index.js";
import ErrorHandler from "./middleware/errorHandler.js";
import path from "path"
import fileUpload from "express-fileupload";



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(),"src","uploads")));
app.use(fileUpload());

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
      console.error("Failed to start server:", err.message);
      process.exit(1); 
    }
  })();
  
