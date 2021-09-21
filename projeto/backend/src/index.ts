import express, { Express } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { apiRouter } from "./routes/apiRouter"

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use("/api", apiRouter)

app.listen(3003, () => {
   console.log("Server running on port 3003")
})