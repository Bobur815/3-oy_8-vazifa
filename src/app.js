import express from "express"
import router from "./routes/routes.js"
import "dotenv/config"
import connectDB from "./config/database.js"

let app = express()
const PORT = process.env.PORT

app.use(express.json())
router().forEach(({url,funk}) => {
    app.use(`/api${url}`,funk)
})

await connectDB()
app.listen(PORT, console.log("Server is running..."))