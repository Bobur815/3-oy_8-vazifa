import express from "express";
import "dotenv/config";
import routes from "./routes/routes.js"

const app = express()
const PORT = process.env.PORT;

app.use(express.json())
routes().forEach(({url,funk}) => {
    app.use(`/api${url}`,funk)
});

const initApp = async () => {
    app.listen(PORT, console.log(`Server is running on ${PORT}-port`))
}

initApp()