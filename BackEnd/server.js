import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.use("/", authRoutes)

const PORT = process.env.PORT || 9002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})